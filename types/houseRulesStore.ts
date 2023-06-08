export interface HouseRulesProps {
  success: boolean
  data: {
    entities: Entity[]
    pagination: Pagination
  }
  message: string
}

export interface Entity {
  id: number
  name: string
  active: number
  order: number
}

export interface Pagination {
  total: number
  count: number
  per_page: number
  current_page: number
  total_pages: number
  links: {
    next: string
    prev: string
  }
}
