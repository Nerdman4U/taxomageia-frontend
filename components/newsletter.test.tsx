import { describe } from "node:test";
import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import * as config from '@/config'
import Newsletter from "./newsletter";


describe("Newsletter", () => {
  
  test("should render and have links", () => {
    const { container } = render(<Newsletter />)
    expect(screen.getByText('Patreon', {exact: false}).closest('a')).toHaveProperty('href', config.patreon)   
  })
})