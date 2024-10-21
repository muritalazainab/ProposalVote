import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ProposalVoteModule = buildModule("ProposalVoteModule", (p) => {
  const proposalVote = p.contract("ProposalVote");

  return { proposalVote };
});

export default ProposalVoteModule;