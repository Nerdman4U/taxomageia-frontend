import { describe } from "node:test";
import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import * as config from '@/lib/config'
import Features from "./features";
import rank from '@/lib/interfaces/taxon.interface'

describe("Features", () => {
  
  test("should render links", () => {
    const ranks = [{
      identifier: "Test",
      name_en: "Test",
      name_fi: "Testi",
      taxon_parent: "Test2",
      taxon_rank: "Domain"
    }] as rank[]
    const { container } = render(<Features ranks={ranks} />)

    expect(screen.getByText('JSON', {exact: false}).closest('a')).toHaveProperty('href', "http://localhost:3000" + config.api_complete)
    expect(screen.getByText('Github', {exact: false}).closest('a')).toHaveProperty('href', config.github)
    expect(screen.getByText('Forum', {exact: false}).closest('a')).toHaveProperty('href', config.forum + "/")
    
  })

})