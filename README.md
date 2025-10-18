# Verifiable Credentials on Base

A decentralized credential management system integrated with Farcaster for professional identity, enabling users to own their verifiable credentials, selectively share proofs, and showcase their validated achievements within their social network.

## Features

- **Decentralized Credential Storage**: Users receive verifiable credentials issued directly to their wallet on Base
- **Zero-Knowledge Proofs**: Generate privacy-preserving proofs for specific credential attributes
- **Farcaster Integration**: Link verified credentials to Farcaster profiles with customizable badges
- **In-Frame Verification**: Request and share credential proofs directly within Farcaster Frames

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet Integration**: OnchainKit, Coinbase Wallet
- **Social Integration**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **ZKP**: snarkjs, circomlibjs

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.local.example` to `.env.local` and add your API keys:
   ```bash
   cp .env.local.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key from Coinbase Developer Platform
- `NEXT_PUBLIC_CHAIN_ID`: Base chain ID (8453 for mainnet, 84532 for testnet)
- `NEXT_PUBLIC_RPC_URL`: Base RPC endpoint
- `NEXT_PUBLIC_PAYMASTER_URL`: Paymaster URL for gas sponsorship

## Architecture

### Data Model

- **CredentialSchema**: Defines credential types and proof requirements
- **VerifiableCredential**: On-chain representation of user credentials
- **ZeroKnowledgeProof**: Privacy-preserving proofs for credential attributes
- **User**: Farcaster profile with linked credentials

### User Flows

1. **Wallet Connection**: Users connect their wallet via OnchainKit
2. **Credential Issuance**: Institutions issue credentials to user wallets
3. **Proof Generation**: Users generate ZKPs for specific attributes
4. **Verification**: Proofs are verified on-chain and shared via Farcaster

## Design System

- **Theme**: Coinbase (dark navy background, Coinbase blue accents)
- **Typography**: System fonts with clear hierarchy
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first design with Tailwind breakpoints

## License

MIT
