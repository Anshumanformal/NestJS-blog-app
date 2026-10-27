
// Type T is a generic entity for Pagination type.
export interface Paginated<T> {
    data: T[]
    meta: {
        itemsPerPage: number,
        totalItems: number,
        currentPage: number,
        totalPages: number
    },
    links: {
        first: string,
        last: string,
        current: string,
        next: string,
        previous: string
    }
}