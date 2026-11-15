import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import ObjectHero from '../components/object/ObjectHero';
import ObjectOverview from '../components/object/ObjectOverview';
import ObjectStory from '../components/object/ObjectStory';
import ObjectFacts from '../components/object/ObjectFacts';
import ObjectTimeline from '../components/object/ObjectTimeline';
import ObjectAchievements from '../components/object/ObjectAchievements';
import ObjectLocationStatus from '../components/object/ObjectLocationStatus';
import ObjectGallery from '../components/object/ObjectGallery';
import ObjectSources from '../components/object/ObjectSources';
import ObjectCard from '../components/object/ObjectCard';
import ObjectComparison from '../components/common/ObjectComparison';
import { useObjectDetail, getRelatedObjects } from '../../controllers/objectController';
import { CaretRight, WarningCircle, Compass } from '@phosphor-icons/react';

export const ObjectDetailsPage = () => {
  const { slug } = useParams();
  const { object, notFound } = useObjectDetail(slug);

  useEffect(() => {
    if (object) {
      document.title = `${object.name} | Space Relics`;
      window.scrollTo(0, 0);
    } else {
      document.title = 'Relic Not Found | Space Relics';
    }
  }, [object, slug]);

  // Handle Invalid or Unknown Slug gracefully
  if (notFound || !object) {
    return (
      <div className="py-20 flex-grow flex items-center justify-center">
        <Container size="narrow">
          <Card elevated className="p-8 sm:p-12 text-center border-red-950/60 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-red-950/40 border border-red-900/60 flex items-center justify-center mx-auto mb-6 text-red-400">
              <WarningCircle weight="duotone" className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-red-400 block mb-2">
              Archival Record Not Found
            </span>

            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-space-text mb-3">
              Relic Missing from Registry
            </h1>

            <p className="text-sm text-space-textSecondary max-w-md mx-auto leading-relaxed mb-8">
              The artifact catalog record for "<span className="font-mono text-space-accentLight">{slug}</span>" could not be located in our Moon or Mars museum collections.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/explore">
                <Button className="gap-2">
                  <Compass className="w-4 h-4" />
                  Browse Destinations
                </Button>
              </Link>
              <Link to="/">
                <Button variant="secondary">Return Home</Button>
              </Link>
            </div>
          </Card>
        </Container>
      </div>
    );
  }

  const isMars = object.destination.toLowerCase() === 'mars';
  const explorerPath = isMars ? '/explore/mars' : '/explore/moon';
  const related = getRelatedObjects(object.slug);

  return (
    <div className="flex flex-col w-full py-8 sm:py-12">
      <Container size="narrow">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-mono text-space-textSecondary">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-space-textMuted">
              <CaretRight weight="bold" className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link to="/explore" className="hover:text-white transition-colors">
                Explore
              </Link>
            </li>
            <li className="text-space-textMuted">
              <CaretRight weight="bold" className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link to={explorerPath} className="hover:text-white transition-colors">
                {object.destination}
              </Link>
            </li>
            <li className="text-space-textMuted">
              <CaretRight weight="bold" className="w-3.5 h-3.5" />
            </li>
            <li className={isMars ? 'text-orange-300 font-semibold truncate' : 'text-moon-white font-semibold truncate'} aria-current="page">
              {object.name}
            </li>
          </ol>
        </nav>

        {/* Section A: Hero */}
        <div>
          <ObjectHero object={object} />
        </div>

        {/* Section B: Overview Matrix */}
        <div>
          <ObjectOverview object={object} />
        </div>

        {/* Section C: The Story Behind the Object */}
        <div>
          <ObjectStory object={object} />
        </div>

        {/* Section D: Educational Did You Know Highlights */}
        {object.interestingFacts && object.interestingFacts.length > 0 && (
          <div>
            <ObjectFacts facts={object.interestingFacts} destination={object.destination} />
          </div>
        )}

        {/* Section E: Interactive Mission Timeline */}
        <div>
          <ObjectTimeline
            timeline={object.missionTimeline}
            destination={object.destination}
          />
        </div>

        {/* Section F: Achievements & Significance */}
        <div>
          <ObjectAchievements
            achievements={object.achievements}
            destination={object.destination}
          />
        </div>

        {/* Section G: Location & Current Physical Status */}
        <div>
          <ObjectLocationStatus object={object} />
        </div>

        {/* Section H: Photographic Gallery & Official Imagery */}
        <div>
          <ObjectGallery
            images={object.images}
            destination={object.destination}
          />
        </div>

        {/* Section I: Official Sources & References */}
        <div>
          <ObjectSources
            sources={object.sources}
            destination={object.destination}
          />
        </div>

        {/* Section K: Related Artifacts Navigation Footer */}
        {related.length > 0 && (
          <section className="pt-6 border-t border-space-border/80">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-bold text-xl text-space-text">
                Related {object.destination} Exhibits
              </h3>
              <Link
                to={explorerPath}
                className="text-xs font-mono uppercase tracking-wider text-space-accent hover:text-space-accentLight transition-colors inline-flex items-center gap-1"
              >
                <span>View Full {object.destination} Chart</span>
                <CaretRight weight="bold" className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((item) => (
                <ObjectCard key={item.id} object={item} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
};

export default ObjectDetailsPage;
