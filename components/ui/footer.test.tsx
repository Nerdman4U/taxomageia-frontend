import { describe } from "node:test";
import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import * as config from '@/lib/config'
import Footer from "./footer";

describe("Footer", () => {

  test("should render links", () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('API').closest('a')).toHaveProperty('href', "http://localhost:3000" + config.api_complete)
    expect(screen.getByText('Forum').closest('a')).toHaveProperty('href', config.forum + "/")
    expect(screen.getByText('Documentation').closest('a')).toHaveProperty('href', "http://localhost:3000" + config.documentation)
    expect(screen.getByText('Credits').closest('a')).toHaveProperty('href', "http://localhost:3000" + config.credits)
    expect(screen.getByText('Contribute').closest('a')).toHaveProperty('href', "http://localhost:3000" + config.contribute)
    expect(screen.getByText('Partner').closest('a')).toHaveProperty('href', "http://localhost:3000" + config.partner)
    expect(screen.getByText('Blog').closest('a')).toHaveProperty('href', config.blog + "/")
    expect(screen.getByText('Diary').closest('a')).toHaveProperty('href', "http://localhost:3000" + config.diary)
    expect(screen.getByText('Linkedin').closest('a')).toHaveProperty('href', config.linkedin)
    expect(screen.getByText('Contact').closest('a')).toHaveProperty('href', "http://localhost:3000" + config.contact)
    expect(screen.getByText('taxomageia.pro', {exact: false}).closest('a')).toHaveProperty('href', "http://localhost:3000/")

    expect(container.querySelector('[aria-label="Github"]')?.closest('a')).toHaveProperty('href', config.github)
    expect(container.querySelector('[aria-label="Facebook"]')?.closest('a')).toHaveProperty('href', config.facebook)
    expect(container.querySelector('[aria-label="Cruip"]')?.closest('a')).toHaveProperty('href', "http://localhost:3000/")
  })

})
