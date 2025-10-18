'use client';

import { useState } from 'react';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Credential {
  id: string;
  type: string;
  issuer: string;
  issuedDate: string;
  status: 'active' | 'revoked';
  attributes: Record<string, string>;
}

interface ZKPGeneratorFormProps {
  credentials: Credential[];
}

export function ZKPGeneratorForm({ credentials }: ZKPGeneratorFormProps) {
  const [selectedCredential, setSelectedCredential] = useState('');
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [proofGenerated, setProofGenerated] = useState(false);

  const handleGenerateProof = async () => {
    setIsGenerating(true);
    // Simulate proof generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    setProofGenerated(true);
  };

  const selectedCred = credentials.find(c => c.id === selectedCredential);

  return (
    <div className="max-w-2xl">
      <div className="p-6 rounded-lg bg-surface border border-surface">
        <div className="mb-6">
          <label className="block text-sm font-medium text-fg mb-2">
            Select Credential
          </label>
          <select
            value={selectedCredential}
            onChange={(e) => {
              setSelectedCredential(e.target.value);
              setSelectedAttributes([]);
              setProofGenerated(false);
            }}
            className="w-full px-4 py-3 rounded-lg bg-bg border border-surface text-fg focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Choose a credential...</option>
            {credentials.map((cred) => (
              <option key={cred.id} value={cred.id}>
                {cred.type} - {cred.issuer}
              </option>
            ))}
          </select>
        </div>

        {selectedCred && (
          <div className="mb-6 animate-fade-in">
            <label className="block text-sm font-medium text-fg mb-2">
              Select Attributes to Prove
            </label>
            <div className="space-y-2">
              {Object.entries(selectedCred.attributes).map(([key, value]) => (
                <label
                  key={key}
                  className="flex items-center gap-3 p-3 rounded-lg bg-bg border border-surface hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedAttributes.includes(key)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedAttributes([...selectedAttributes, key]);
                      } else {
                        setSelectedAttributes(selectedAttributes.filter(a => a !== key));
                      }
                      setProofGenerated(false);
                    }}
                    className="w-4 h-4 rounded border-surface text-primary focus:ring-primary focus:ring-offset-0"
                  />
                  <div className="flex-1">
                    <span className="text-sm font-medium text-fg capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-sm text-fg/60 ml-2">= {value}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {selectedAttributes.length > 0 && (
          <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-fg mb-1">Privacy Notice</h4>
                <p className="text-xs text-fg/70">
                  Your proof will only reveal the selected attributes without exposing any other personal information or the full credential.
                </p>
              </div>
            </div>
          </div>
        )}

        {proofGenerated && (
          <div className="mb-6 p-4 rounded-lg bg-success/5 border border-success/20 animate-fade-in">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-fg mb-1">Proof Generated Successfully</h4>
                <p className="text-xs text-fg/70 mb-3">
                  Your zero-knowledge proof has been generated and is ready to share.
                </p>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-medium hover:bg-primary/90 transition-colors">
                    Share on Farcaster
                  </button>
                  <button className="px-3 py-1.5 rounded-lg border border-surface text-fg text-xs font-medium hover:bg-surface/50 transition-colors">
                    Copy Proof Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleGenerateProof}
          disabled={selectedAttributes.length === 0 || isGenerating}
          className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Generating Proof...
            </>
          ) : (
            <>
              Generate Zero-Knowledge Proof
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
