/* eslint-disable prettier/prettier */
import Policy from '../classes/policy.model';

export interface IssuePolicy {
  issue(policy: Policy): void;
}
