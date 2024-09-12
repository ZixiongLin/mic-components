import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Table } from "../Table";
import { TableHead } from "../TableHead";
import { TableBody } from "../TableBody";

const data = [
    {
      "id": 1,
      "name": "Juan Pérez",
      "age": 28,
      "email": "juan.perez@example.com"
    },
    {
      "id": 2,
      "name": "Ana García",
      "age": 34,
      "email": "ana.garcia@example.com"
    },
    {
      "id": 3,
      "name": "Carlos López",
      "age": 25,
      "email": "carlos.lopez@example.com"
    },
    {
      "id": 4,
      "name": "Lucía Fernández",
      "age": 30,
      "email": "lucia.fernandez@example.com"
    }
  ]

describe("table", () => {
    it("render", () => {
        render(<Table data-testid = "table">
            <TableHead
                data-testid = "t-head"
                each={Object.keys(data)}
                render={(item,index) => {
                    return <th key={index}>{item}</th>
                }}
            />
            <TableBody
                data-testid = "t-body"
                each={data}
                row={(item,index) => {
                    return <tr key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      {
                        Object.values(item as {id:any,name:any,age:any,email:any} ).map((v,i) => {
                          return <td className="px-6 py-4" key={i}>
                              {v}
                            </td>
                        })
                      }
                    </tr>
                }}
            />
        </Table>)
        expect(screen.getByTestId('table')).not.toBeNull()
        expect(screen.getByTestId('t-head')).not.toBeNull()
        expect(screen.getByTestId('t-body')).not.toBeNull()
    })
})