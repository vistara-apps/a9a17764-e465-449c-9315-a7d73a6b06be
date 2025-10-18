'use client';

import { CheckCircle2, Clock, XCircle, Loader2 } from 'lucide-react';

interface TransactionStatusProps {
  status: 'pending' | 'confirmed' | 'failed' | 'verified';
  txHash?: string;
}

export function TransactionStatus({ status, txHash }: TransactionStatusProps) {
  const statusConfig = {
    pending: {
      icon: Clock,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20',
      label: 'Transaction Pending',
      description: 'Your transaction is being processed on Base...',
    },
    confirmed: {
      icon: CheckCircle2,
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20',
      label: 'Transaction Confirmed',
      description: 'Your transaction has been confirmed on-chain.',
    },
    failed: {
      icon: XCircle,
      color: 'text-error',
      bgColor: 'bg-error/10',
      borderColor: 'border-error/20',
      label: 'Transaction Failed',
      description: 'Your transaction could not be completed. Please try again.',
    },
    verified: {
      icon: CheckCircle2,
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20',
      label: 'Proof Verified',
      description: 'Your zero-knowledge proof has been verified on-chain.',
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`p-4 rounded-lg ${config.bgColor} border ${config.borderColor}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${config.color} flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          <h4 className={`text-sm font-semibold ${config.color} mb-1`}>
            {config.label}
          </h4>
          <p className="text-xs text-fg/70 mb-2">{config.description}</p>
          {txHash && (
            <a
              href={`https://basescan.org/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              View on BaseScan →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
