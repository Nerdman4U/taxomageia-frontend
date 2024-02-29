import { describe } from "node:test";
import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import * as config from '@/lib/config'
import Hero from "./hero";

describe("Hero", () => {
  
  test("should render links", () => {
    const { container } = render(<Hero />)
    expect(screen.getByText('Creatures', {exact: false}).closest('a')).toHaveProperty('href', "http://localhost:3000/" + config.inner_creatures)
    expect(screen.getByText('Learn more', {exact: false}).closest('a')).toHaveProperty('href', "http://localhost:3000" + config.documentation)
  })
})