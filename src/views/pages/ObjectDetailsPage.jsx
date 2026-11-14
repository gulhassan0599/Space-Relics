import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Heading } from '../components/common/Heading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { useObjectDetail, getRelatedObjects } from '../../controllers/objectController';
import { ArrowLeft, MapPin, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

export const ObjectDetailsPage = () => {
  const { slug } = useParams();
  const { object, notFound } = useObjectDetail(slug);

  if (notFound || !object) {
    return (
      <div className="py-20 flex-grow flex items-center justify-center">
        <Container size="narrow">
          <Card elevated className="p-8 text-center border-red-900/40">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-space-text">
              Relic Not Found
            </h2>
            <p className="text-sm text-space-textSecondary mt-2">
              The artifact with slug "<span className="font-mono text-space-accentLight">{slug}</span>" could not be located in the museum archives.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link to="/explore">
                <Button>Browse All Relics</Button>
              </Link>
            </div>
          </Card>
        </Container>
      </div>
    );
  }

  const isMoon = object.destination.toLowerCase() === 'moon';
  const related = getRelatedObjects(object.slug);

  return (
    <div className="py-12 sm:py-16">
      <Container size="narrow">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2">
          <Link
            to={isMoon ? '/explore/moon' : '/explore/mars'}
            className="inline-flex items-center gap-1.5 text-xs text-space-textSecondary hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to {object.destination} Explorer
          </Link>
        </div>

        {/* Heading & Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant={isMoon ? 'moon' : 'mars'}>{object.destination}</Badge>
          <Badge variant="default">{object.objectType}</Badge>
          <Badge variant="success">{object.missionStatus}</Badge>
        </div>

        <Heading
          level={1}
          subtitle={object.shortDescription}
        >
          {object.name}
        </Heading>

        {/* Overview Card */}
        <Card elevated className="p-6 sm:p-8 mb-8">
          <h3 className="text-lg font-heading font-semibold text-space-text mb-3">
            Mission Overview
          </h3>
          <p className="text-sm sm:text-base text-space-textSecondary leading-relaxed">
            {object.overview}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-space-border/60">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-space-accent mt-0.5" />
              <div>
                <span className="text-xs text-space-textMuted uppercase font-semibold">Launch / Deployment</span>
                <p className="text-sm text-space-text font-medium">{object.year} ({object.missionName})</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-space-accent mt-0.5" />
              <div>
                <span className="text-xs text-space-textMuted uppercase font-semibold">Resting Location</span>
                <p className="text-sm text-space-text font-medium">{object.location?.locationName}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Key Achievements */}
        {object.achievements && object.achievements.length > 0 && (
          <Card elevated className="p-6 sm:p-8 mb-8">
            <h3 className="text-lg font-heading font-semibold text-space-text mb-4">
              Historical Achievements
            </h3>
            <ul className="space-y-3">
              {object.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-space-textSecondary leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Why Left Behind */}
        {object.whyLeftBehind && (
          <Card elevated className="p-6 sm:p-8 mb-8 border-l-4 border-l-space-accent">
            <h3 className="text-base font-heading font-semibold text-space-text mb-2">
              Why It Remains on {object.destination}
            </h3>
            <p className="text-sm text-space-textSecondary leading-relaxed">
              {object.whyLeftBehind}
            </p>
          </Card>
        )}

        {/* Stage 1 Foundation Notice */}
        <div className="p-4 rounded-xl bg-space-card/60 border border-space-border/60 text-xs text-space-textMuted flex items-center justify-between">
          <span>Full multimedia museum exhibit view will be expanded in Stage 4.</span>
          <span className="font-mono text-space-accentLight">Verified Controller State</span>
        </div>
      </Container>
    </div>
  );
};

export default ObjectDetailsPage;
