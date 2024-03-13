import { describe } from "node:test";
import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import * as config from '@/config'
import Banner from "./banner";

describe("Banner", () => {

  test("should render links", () => {
    render(<Banner />)
    expect(screen.getByText('on GitHub!', {exact: false}).closest('a')).toHaveProperty('href', config.github)
  })

})
