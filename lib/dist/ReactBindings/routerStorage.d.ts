import Router from "..";
interface RouterStorage {
    router?: Router;
    currentNestingDepth: number;
}
declare const storage: RouterStorage;
export default storage;
