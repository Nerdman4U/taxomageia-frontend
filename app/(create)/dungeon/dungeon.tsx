"use client";

import localForage from "localforage";

import { useSelector, useDispatch } from "react-redux";
import { create as createBreadcrumb } from "@/lib/features/studio/breadcrumbs/breadcrumbReducer";
import { TState } from "@/lib/store";
import { useEffect } from "react";
// import AppContext from '@/app/context/application.context'

import EditorContainer from "@/components/dungeon/editor.container";
import Breadcrumbs from "@/components/dungeon/breadcrumbs";

// import * as contextType from "@/app/context/context.type";

import { setTaxomageia } from "@/lib/features/studio/editor/taxomageiaReducer";

/**
 *
 * @returns
 */
function Dungeon() {
  // const value = useContext(AppContext) as contextType.application
  // if (!value.model_metadata) return <></>

  const dispatch = useDispatch();
  const taxomageia_data = useSelector((state: TState) => state.taxomageia);
  const breadcrumbs = useSelector((state: TState) => state.breadcrumbs);
  const metadata = useSelector((state: TState) => state.metadata);

  // useEffect(() => {
  //   dispatch(set(value.model_metadata))
  // }, [value.model_metadata])

  // Double taxomageia breadcrumb when refreshing whole page... dunno?
  let allow = true;
  useEffect(() => {
    if (allow && breadcrumbs.length === 0) {
      allow = false;
      dispatch(
        createBreadcrumb({
          name: "taxomageia",
          identifier: taxomageia_data.identifier,
        })
      );
    }
  }, [breadcrumbs]);

  useEffect(() => {
    localForage
      .getItem("taxomageia")
      .then((obj) => {
        console.log("Dungeon() getting item from localForage, obj:", obj);
        if (obj) {
          dispatch(setTaxomageia(obj));
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Dungeon</h2>
            <p>Welcome to create your own Taxomageia!</p>
            <p>
              <i>Remember to login to save your work!</i>
            </p>
            <Breadcrumbs />
            <div className="text-sm text-gray-400 shadow-md p-10">
              <EditorContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dungeon;
