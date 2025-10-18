'use client';

import { Award, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';

interface Credential {
  id: string;
  type: string;
  issuer: string;
  issuedDate: string;
  status: 'active' | 'revoked';
  attributes: Record<string, string>;
}

interface CredentialCardProps {
  credential: Credential;
  variant?: 'compact' | 'detailed' | 'issuance-preview';
}

export function CredentialCard({ credential, variant = 'detailed' }: CredentialCardProps) {
  if (variant === 'compact') {
    return (
      <div className="p-4 rounded-lg bg-surface border border-surface hover:border-primary/50 transition-colors cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-fg truncate">{credential.type}</h4>
            <p className="text-xs text-fg/60">{credential.issuer}</p>
          </div>
          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-lg bg-surface border border-surface hover:border-primary/50 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-fg mb-1">{credential.type}</h4>
            <p className="text-sm text-fg/60">{credential.issuer}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          credential.status === 'active'
            ? 'bg-success/10 text-success'
            : 'bg-error/10 text-error'
        }`}>
          {credential.status === 'active' ? 'Active' : 'Revoked'}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {Object.entries(credential.attributes).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between text-sm">
            <span className="text-fg/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
            <span className="text-fg font-medium">{value}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-xs text-fg/60 mb-4">
        <Calendar className="w-3 h-3" />
        <span>Issued on {new Date(credential.issuedDate).toLocaleDateString()}</span>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
          Generate Proof
        </button>
        <button className="px-4 py-2 rounded-lg border border-surface text-fg text-sm font-medium hover:bg-surface/50 transition-colors flex items-center gap-2">
          View Details
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
