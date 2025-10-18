'use client';

import { useEffect, useState } from 'react';
import { Shield, Award, Lock, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { CredentialCard } from './components/CredentialCard';
import { ZKPGeneratorForm } from './components/ZKPGeneratorForm';
import { TransactionStatus } from './components/TransactionStatus';

interface Credential {
  id: string;
  type: string;
  issuer: string;
  issuedDate: string;
  status: 'active' | 'revoked';
  attributes: Record<string, string>;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'credentials' | 'verify' | 'requests'>('credentials');
  const [credentials, setCredentials] = useState<Credential[]>([
    {
      id: '1',
      type: 'Mechanical Engineering Degree',
      issuer: 'MIT',
      issuedDate: '2023-05-15',
      status: 'active',
      attributes: {
        degree: 'Bachelor of Science',
        major: 'Mechanical Engineering',
        gpa: '3.8',
      },
    },
    {
      id: '2',
      type: 'PMP Certification',
      issuer: 'PMI',
      issuedDate: '2024-01-10',
      status: 'active',
      attributes: {
        certification: 'Project Management Professional',
        level: 'Professional',
      },
    },
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-surface">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-fg">Verifiable Base Identity</h1>
              <p className="text-xs text-fg/60">Powered by Base</p>
            </div>
          </div>
          <ConnectWallet />
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-primary/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-fg/80">Decentralized & Privacy-Preserving</span>
          </div>
          
          <h2 className="text-4xl font-bold text-fg mb-4">
            Own Your Professional Identity
          </h2>
          <p className="text-lg text-fg/70 mb-8">
            Securely store, manage, and selectively share your verifiable credentials on Base. 
            Prove your qualifications without revealing sensitive data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-surface border border-surface">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-fg mb-2">Zero-Knowledge Proofs</h3>
              <p className="text-sm text-fg/60">
                Share proof of credentials without revealing personal data
              </p>
            </div>

            <div className="p-6 rounded-lg bg-surface border border-surface">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-fg mb-2">On-Chain Verification</h3>
              <p className="text-sm text-fg/60">
                Cryptographically verified credentials stored on Base
              </p>
            </div>

            <div className="p-6 rounded-lg bg-surface border border-surface">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-fg mb-2">Farcaster Integration</h3>
              <p className="text-sm text-fg/60">
                Showcase verified credentials on your social profile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-surface">
          <button
            onClick={() => setActiveTab('credentials')}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === 'credentials'
                ? 'text-primary'
                : 'text-fg/60 hover:text-fg'
            }`}
          >
            My Credentials
            {activeTab === 'credentials' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('verify')}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === 'verify'
                ? 'text-primary'
                : 'text-fg/60 hover:text-fg'
            }`}
          >
            Generate Proof
            {activeTab === 'verify' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === 'requests'
                ? 'text-primary'
                : 'text-fg/60 hover:text-fg'
            }`}
          >
            Verification Requests
            {activeTab === 'requests' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'credentials' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-fg">Your Credentials</h3>
                <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
                  Request New Credential
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {credentials.map((credential) => (
                  <CredentialCard
                    key={credential.id}
                    credential={credential}
                    variant="detailed"
                  />
                ))}
              </div>

              {credentials.length === 0 && (
                <div className="text-center py-12">
                  <Award className="w-16 h-16 text-fg/20 mx-auto mb-4" />
                  <p className="text-fg/60">No credentials yet. Request your first credential to get started.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'verify' && (
            <div>
              <h3 className="text-2xl font-semibold text-fg mb-6">Generate Zero-Knowledge Proof</h3>
              <ZKPGeneratorForm credentials={credentials} />
            </div>
          )}

          {activeTab === 'requests' && (
            <div>
              <h3 className="text-2xl font-semibold text-fg mb-6">Verification Requests</h3>
              <div className="space-y-4">
                <div className="p-6 rounded-lg bg-surface border border-surface">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-fg mb-1">Proof of Engineering Degree</h4>
                      <p className="text-sm text-fg/60">Requested by @techcorp</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-medium">
                      Pending
                    </span>
                  </div>
                  <p className="text-sm text-fg/70 mb-4">
                    TechCorp is requesting proof that you hold an engineering degree from an accredited institution.
                  </p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
                      Generate Proof
                    </button>
                    <button className="px-4 py-2 rounded-lg border border-surface text-fg text-sm font-medium hover:bg-surface/50 transition-colors">
                      Decline
                    </button>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-surface border border-surface">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-fg mb-1">PMP Certification Verification</h4>
                      <p className="text-sm text-fg/60">Requested by @projectmanagers</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                      Verified
                    </span>
                  </div>
                  <p className="text-sm text-fg/70 mb-4">
                    Proof successfully generated and verified on-chain.
                  </p>
                  <TransactionStatus status="verified" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-fg/60">
              <Shield className="w-4 h-4" />
              <span>Secured by Base • Privacy-First</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-fg/60">
              <a href="#" className="hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
