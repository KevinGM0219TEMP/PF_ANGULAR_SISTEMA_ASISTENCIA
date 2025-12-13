import { FilterModel } from "./FilterModel";
import { SortModel } from "./SortModel";

export interface PaginationModel{
    pageNumber: number;
    rowsPerPage: number;
    filters: Array<FilterModel>;
    sorts: Array<SortModel>;
}