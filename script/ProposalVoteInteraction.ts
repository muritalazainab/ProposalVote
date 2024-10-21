import hre from "hardhat";


async function main() {
    const DEPLOYED_PROPOSALVOTE_CONTRACT =
        "0xF5B0499E5ca72054be8f09Ba1Ab31A3ef0557858";

    const myAccount = "0x265B06599e4C8dfE7e34612F628e783C84217191";

    const signer = await hre.ethers.getSigner(myAccount);

    const proposalContractInstance = await hre.ethers.getContractAt(
        "ProposalVote",
        DEPLOYED_PROPOSALVOTE_CONTRACT);

    console.log("#################### Deploying proposal vote #######################################");

    const RenameProposal = await proposalContractInstance.connect(signer).createProposal("Zainab", "This is my first proposal", 2);
    RenameProposal.wait();

    console.log({ "ProposalVote 1 deployed to": RenameProposal });

    const RenameProposal2 = await proposalContractInstance.connect(signer).createProposal("Opeyemi", "This is my seconal proposal", 4);
    RenameProposal2.wait();
    
    console.log({ "ProposalVote 2 deployed to": RenameProposal2 });

    console.log("#################### getting the vote on proposal#######################################");

    const votingProcess = await proposalContractInstance.connect(signer).voteOnProposal(0);

    console.log({ "lenghth of proposalvote": votingProcess });


    const getProposalHere = await proposalContractInstance.connect(signer).getProposal(0);

    console.table(getProposalHere);












}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})