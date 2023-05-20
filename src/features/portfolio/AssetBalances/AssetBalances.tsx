import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Typography from 'app/components/Typography'
import {
  TABLE_TABLE_CLASSNAME,
  TABLE_TBODY_TD_CLASSNAME,
  TABLE_TBODY_TR_CLASSNAME,
  TABLE_TR_TH_CLASSNAME,
  TABLE_WRAPPER_DIV_CLASSNAME,
} from 'app/features/trident/constants'
import React, { FC } from 'react'
// @ts-ignore TYPE NEEDS FIXING
import { useFlexLayout, usePagination, useSortBy, useTable } from 'react-table'
// @ts-ignore: Unreachable code error
// eslint-disable-next-line simple-import-sort/imports
import { Arwes, ThemeProvider, Heading, Paragraph, Frame, createTheme, SoundsProvider, createSounds, withSounds } from 'arwes';
interface AssetBalancesProps {
  config: any
  onSelect?(row: any): void
}

const AssetBalances: FC<AssetBalancesProps> = ({ config, onSelect }) => {
  const { i18n } = useLingui()

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    // @ts-ignore TYPE NEEDS FIXING
    page,
  } = useTable(config, useSortBy, usePagination, useFlexLayout)

  return (
    <div className={TABLE_WRAPPER_DIV_CLASSNAME}>
      <table id="asset-balances-table" {...getTableProps()} className={TABLE_TABLE_CLASSNAME}>
        <thead >
          {headerGroups.map((headerGroup, i) => (
            <Frame animate={true}
              level={3}
              corners={3}
              
              layer='primary'  key={i}>
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => (
                  <th
                    // @ts-ignore TYPE NEEDS FIXING
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={i}
                    className={TABLE_TR_TH_CLASSNAME(i, headerGroup.headers.length)}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            </Frame>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="h-[65px]">
          {page.length > 0 ? (
            // @ts-ignore TYPE NEEDS FIXING
            page.map((row, i) => {
              prepareRow(row)
              return (
                <Frame animate={true}
              level={3}
              corners={3}
              
              className="mt-3"
              layer='primary'  key={i}>
                <tr
                  {...row.getRowProps()}
                  
                  onClick={() => onSelect && onSelect(row)}
                  className={TABLE_TBODY_TR_CLASSNAME}
                >
                  {/*@ts-ignore TYPE NEEDS FIXING*/}
                  {row.cells.map((cell, i) => {
                    return (
                      <td key={i} {...cell.getCellProps()} className={TABLE_TBODY_TD_CLASSNAME(i, row.cells.length)}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
                </Frame>
              )
            })
          ) : (
            <Typography
              variant="xs"
              className="text-center text-low-emphesis h-[60px] flex items-center justify-center"
            >
              {i18n._(t`No balances`)}
            </Typography>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AssetBalances
