import { describe } from "node:test";
import { expect, test } from "vitest";
import { within, render, screen } from '@testing-library/react'
import * as config from '@/lib/config'
import Contribute from "./page";

describe("Contribute", () => {
  
  test("it should render links", () => {
    const { container } = render(<Contribute />)
    expect(screen.getAllByText('Patreon')[1].closest('a')).toHaveProperty('href', config.patreon)
    expect(screen.getByText('repository', {exact: false}).closest('a')).toHaveProperty('href', config.github)
    expect(screen.getByText('forum').closest('a')).toHaveProperty('href', config.forum + "/")
  })
})