/**
 * Generic Crud Helpers
 *
 * aims to parse input params to handle all of the following
 * pagination, sorting & filteration
 *
 * @author MarioMonir
 * */

// --------------------------------------------------

export type GetListParsed = {
  where?: object
  skip?: number
  take?: number
  orderBy?: Array<object>
  q?: string
  include?: Array<string>
  select?: object
}

// --------------------------------------------------

export type ParseQueryParams = {
  path?: string
  select?: Array<string>
  pagination?: { page: number; perPage: number }
  sort?: { field: string; order: 'ASC' | 'DESC' }
  filter?: object
}

// --------------------------------------------------

const parseFilter = (entity: string, filter: object = {}) => {
  const where: any = {}
  if (!entity) return
  for (const [key, value] of Object.entries(filter)) {
    // add in for integers & contains for strings
    where[key] = { contains: value }
  }
  return where
}

// --------------------------------------------------

// const parseSearhEngine = () => {}

// --------------------------------------------------

const parseSelectors = (selectedColumn?: Array<string>) => {
  if (!selectedColumn?.length) return undefined
  let select: any = {}
  selectedColumn?.forEach((field: string) => {
    select[field] = true
  })
  return select
}

// --------------------------------------------------

export const parseQuery = ({
  path,
  select,
  pagination,
  sort,
  filter,
}: // include,
ParseQueryParams): GetListParsed => {
  let { page = 1, perPage = 10 } = pagination || {}
  let { field = '', order = 'ASC' } = sort || {}

  /** Regex get entity that between /entity. */
  const [_, entity]: any = path?.match(/\/(.*)\./)
  const where = parseFilter(entity, filter)

  page = (Number(page) || 1) - 1
  select = parseSelectors(select)

  const orderBy = field ? [{ [field]: order?.toLowerCase() }] : []
  const take = Number(perPage) || 10 /** SQL Limit */
  const skip = page * take /** SQL Offset */
  return { where, skip, take, orderBy, select, q: '' }
}

// --------------------------------------------------

const setExposeHeaders = (res: any) => {
  const rawValue = res.getHeader('Access-Control-Expose-Headers') || ''

  if (typeof rawValue !== 'string') return

  const headers = new Set(
    rawValue
      .split(',')
      .map((header) => header.trim())
      .filter((header) => Boolean(header))
  )

  headers.add('Content-Range')
  headers.add('X-Total-Count')
  res.header('Access-Control-Expose-Headers', [...headers].join(', '))
}

// --------------------------------------------------

export const setGetListHeaders = ({ res, skip = 0, rowsCount, total }: any) => {
  setExposeHeaders(res)
  res.header('Content-Range', `${skip}-${skip + rowsCount}/${total}`)
  res.header('X-Total-Count', `${total}`)
}
