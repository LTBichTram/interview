import { BsCode, BsWikipedia } from 'react-icons/bs';
import { GoIssueOpened } from 'react-icons/go';
import { BiGitPullRequest } from 'react-icons/bi';
import { AiOutlineInteraction, AiFillProject , AiFillSafetyCertificate} from 'react-icons/ai';

export const listControl = [
 {
    title: 'Code',
    icon: BsCode,
 },
 {
    title: 'Issue',
    icon: GoIssueOpened
 },
 {
    title: 'Pull Request',
    icon: BiGitPullRequest
 },
 {
    title: 'Action',
    icon: AiOutlineInteraction
 },
 {
    title: 'Project',
    icon: AiFillProject
 },
 {
    title: 'Wiki',
    icon: BsWikipedia,
 },
 {
    title: 'Sercurity',
    icon: AiFillSafetyCertificate
 },
]