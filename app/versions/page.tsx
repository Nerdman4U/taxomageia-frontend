"use client";

import { useState, useContext } from "react";

import AppContext from "@/app/context/application.context";
import * as contextType from "@/app/context/context.type";
// import serverVersions from "../../app/versions/server.json" assert { type: "json" }
//import clientVersions from "../../app/versions/client.json" assert { type: "json" }
//import dataVersions from "../../app/versions/data.json" assert { type: "json" }
import Toggleable from "@/components/toggleable";

const Versions = () => {
  const value = useContext(AppContext);
  value.backend = value.backend || { current: "", versions: [] };
  value.frontend = value.frontend || { current: "", versions: [] };
  const codenames = value.codenames || [];

  const server_versions = value.backend.versions;
  const client_versions = value.frontend.versions;
  const codename = codenames.length > 0 ? codenames[0] : {};
  console.log(codenames, "codename:", codename);
  // const templates = value.data

  const [serverVisible, setServerVisible] = useState(false);
  const [clientVisible, setClientVisible] = useState(false);
  // const [dataVisible, setDataVisible] = useState(true)

  const toggleServer = () => {
    setServerVisible(!serverVisible);
  };
  const toggleClient = () => {
    setClientVisible(!clientVisible);
  };
  // const toggleData = () => { setDataVisible(!dataVisible) }

  const show = ({
    visible,
    topic,
    toggleVisibility,
    id,
    versions,
  }: {
    visible: boolean;
    topic: string;
    toggleVisibility: () => void;
    id: string;
    versions: contextType.version[];
  }) => {
    console.log("visible:", visible);
    return (
      <Toggleable
        visible={visible}
        id={id}
        topic={topic}
        toggleVisibility={toggleVisibility}
      >
        <VersionsList versions={versions} />
      </Toggleable>
    );
  };

  return (
    <div className="w-3/5 mx-auto px-4 sm:px-6 text-gray-400">
      <div className="py-12 md:py-20 border-t border-gray-800">
        <div className="mb-12">
          <h1 className="h1 mb-6 text-purple-600">
            {codename.name} ({codename.type})
          </h1>
          <table>
            <tbody>
              <tr>
                <td className="pr-4">Date</td>
                <td>{codename.date}</td>
              </tr>
              <tr>
                <td className="pr-4">Backend</td>
                <td>v.{codename?.backend?.version}</td>
              </tr>
              <tr>
                <td className="pr-4">Frontend</td>
                <td>v.{codename?.frontend?.version}</td>
              </tr>
            </tbody>
          </table>
          <p>{codename.description}</p>
        </div>

        <div className="mb-12">
          <h1 className="h1 mb-6 text-purple-600">Code</h1>
          <div className="">
            {show({
              visible: serverVisible,
              topic: "Server (Backend)",
              toggleVisibility: toggleServer,
              id: "server",
              versions: server_versions,
            })}
          </div>
          <div className="">
            {show({
              visible: clientVisible,
              topic: "Client (Frontend)",
              toggleVisibility: toggleClient,
              id: "client",
              versions: client_versions,
            })}
          </div>
        </div>

        {/* <div className="mb-12">
        <h1 className="h1 mb-6 text-purple-600">Templates</h1>
        {
          templates?.map((template) =>
            <div className="">
              { show({visible: dataVisible, topic: template.name, toggleVisibility: toggleData, id: template.name, versions: template.versions}) }
            </div>)
        }
        </div> */}
      </div>
    </div>
  );
};

const VersionsList = ({ versions }: { versions: contextType.version[] }) => {
  return (
    <section>
      <div className="px-4 sm:pb-6 text-gray-400">
        <div className="md:py-2">
          {/* Items */}
          {versions?.map((info) => <Version key={info.version} info={info} />)}
        </div>
      </div>
    </section>
  );
};

const Version = ({ info }: { info: contextType.version }) => {
  const next = info.next || [];
  const features = info.features || [];
  const issues = info.issues || [];
  const notes = info.notes || [];
  const changes = info.changes || [];
  const fixed = info.fixed || [];
  return (
    <div className="">
      <h3 className="h3 mt-1 text-gray-400">{info.version}</h3>
      <div>
        <VersionItems topic="Features" items={features} />
        <VersionItems topic="Known problems" items={issues} />
        <VersionItems topic="Next" items={next} />
        <VersionItems topic="Notes" items={notes} />
        <VersionItems topic="Changes" items={changes} />
        <VersionItems topic="Fixed" items={fixed} />
      </div>
    </div>
  );
};

const VersionItems = ({ items, topic }: { topic: string; items: string[] }) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <div className="mx-6 mt-1 my-10">
      <b>{topic}</b>
      <ol>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default Versions;
