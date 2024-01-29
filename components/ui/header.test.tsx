import { describe } from "node:test";
import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import * as config from '@/config'
import Header from "./header";

describe("Header", () => {
  
  test("should render header links", async () => {
    const { container } = render(<Header />)
   
    const e1 = await screen.getByText('Server:', {exact: false})
    const e2 = await screen.getByText('Client:', {exact: false})
    const e3 = await screen.getByText('the First', {exact: false})
    expect(e1.closest('a')).toHaveProperty('href', "http://localhost:3000/" + config.versions + "#server")
    expect(e2.closest('a')).toHaveProperty('href', "http://localhost:3000/" + config.versions + "#client")
    expect(e3.closest('a')).toHaveProperty('href', "http://localhost:3000/" + config.versions + "#data")

    expect(container.querySelector('[aria-label="Cruip"]')?.closest('a')).toHaveProperty('href', "http://localhost:3000/")
  })

})