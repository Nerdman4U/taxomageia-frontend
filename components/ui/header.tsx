"use client";

import Link from "next/link";
import MobileMenu from "./mobile-menu";
// import { useContext } from "react";
// import AppContext from "@/app/context/application.context";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as config from "@/config";
import * as releaseNotesTypes from "@/lib/features/release_notes.types";
import pkg from "../../package.json" assert { type: "json" };

import { TState } from "@/lib/store";
import { setModelMetadata } from "@/lib/features/studio/metadata/metadataReducer";
import { setReleaseNotes } from "@/lib/features/releaseNotesReducer";

import SignIn from "./signin";

export default function Header() {
  const dispatch = useDispatch();

  const release_notes = useSelector(
    (state: TState) => state.release_notes
  ) as releaseNotesTypes.release_notes;

  useEffect(() => {
    fetch(config.release_notes)
      .then((response) => {
        return response.json();
      })
      .then((data): void => {
        console.log(
          `connected to server at ${config.release_notes}`,
          "data:",
          data
        );
        if (!data) return;

        const client_version = pkg.version;
        const result = {
          ...data,
          frontend: {
            ...data.frontend,
            current: client_version,
          },
        };
        console.log("result:", result);
        dispatch(setReleaseNotes(result));
        // console.log("release_notes.frontend", release_notes.frontend);
      });
  }, []);

  useEffect(() => {
    // if metadata has been loaded, do not fetch
    fetch(config.metadata)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("fetched metadata: ", data);
        dispatch(setModelMetadata(data));
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (!release_notes.backend)
    release_notes.backend = { current: "", versions: [] };
  if (!release_notes.frontend)
    release_notes.frontend = { current: "", versions: [] };
  if (!release_notes.codenames) release_notes.codenames = [];
  if (!release_notes.data) release_notes.data = [];

  const clientVersionStr = `Client: v${release_notes.frontend?.current}`;
  const serverVersionStr = `Server: v${release_notes.backend?.current}`;
  const codename =
    release_notes.codenames.length > 0
      ? release_notes.codenames[0].name
      : "Mystical Opossum";

  return (
    <header className="w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg
                className="w-8 h-8 fill-current text-purple-600"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg>
            </Link>
          </div>
          <div className="text-sm text-gray-600 ml-3">
            <p className="mb-0 pb-0 font-semibold text-purple-400">
              {codename}
            </p>
            <p className="mb-0 pb-0">
              <a
                href={config.versions + "#server"}
                className="my-0 py-0 version-link"
              >
                {serverVersionStr}
              </a>
            </p>
            <p className="mb-0 pb-0">
              <a
                href={config.versions + "#client"}
                className="my-0 py-0 version-link"
              >
                {clientVersionStr}
              </a>
            </p>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <SignIn />
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
