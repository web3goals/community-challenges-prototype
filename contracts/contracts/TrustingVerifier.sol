// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "./interfaces/IVerifier.sol";
import "./libraries/Errors.sol";

/**
 * Contract to verify any challenge completion as completed.
 */
contract TrustingVerifier is IVerifier {
    address internal _challengeAddress;
    mapping(uint256 => mapping(string => bool))
        internal _handlesWithCompletedChallenge;

    constructor(address challengeAddress) {
        _challengeAddress = challengeAddress;
    }

    function verifyChallengeCompletion(
        uint256 challengeTokenId,
        uint256 challengeDuration,
        string memory challengeHashtag,
        string memory challengeHandle,
        string memory participantHandle
    ) public {
        // Check sender
        if (msg.sender != _challengeAddress)
            revert Errors.NotChallengeContract();
        // Update data
        _handlesWithCompletedChallenge[challengeTokenId][
            participantHandle
        ] = true;
    }

    function isChallengeCompleted(
        uint256 challengeTokenId,
        string memory participantHandle
    ) public view returns (bool) {
        return
            _handlesWithCompletedChallenge[challengeTokenId][participantHandle];
    }
}
