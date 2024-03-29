import TaxonPreviewListItem from '@/components/taxon-preview-list-item';
import body from '@/lib/interfaces/body.interface.js';
import bodySegment from '@/lib/interfaces/body_segment.interface.js';
import bodyPart from '@/lib/interfaces/body_part.interface.js';
import attribute from '@/lib/interfaces/attribute.interface.js';
//import metamorphosis from '@/lib/interfaces/metamorphosis.interface.js';
import existence from '@/lib/interfaces/existence.interface.js';
import * as taxon from '@/lib/interfaces/taxon.interface.js';

import { useRef, useEffect } from 'react';

type bodyPowersTableRowProps = {
  powerName: string
  value: number
}
type powers = {
  abilities: Record<string, any>
  properties: string[]
  inputs: string[]
  outputs: string[]
}

// {string, number}
const BodyPowersTableRow = ({powerName, value}: bodyPowersTableRowProps) => {
  return (
    <tr><td>{powerName}</td><td>{value}</td></tr>
  )
}

const BodyPowers = ({ powers }: { powers: powers }) => {
  return (
    <div className="mt-10">
    <table className="table-auto w-full">
      <caption className="text-blue-500">Powers of this body.</caption>
      <tbody>
        <tr><td>Abilities</td><td>
        <table className="table-auto w-full">
          <tbody>
           {
             Object.keys(powers.abilities).map((key) => (
              <BodyPowersTableRow key={key} powerName={key} value={powers.abilities[key]} />
             ))
           }
          </tbody>
        </table>

        </td></tr>
        <tr><td>Properties</td><td>{powers.properties?.join(",")}</td></tr>
        <tr><td>Inputs</td><td>{powers.inputs?.join(",")}</td></tr>
        <tr><td>Outputs</td><td>{powers.outputs?.join(",")}</td></tr>
      </tbody>
    </table>
    </div>
  )
}

const BodyPart = ({ body_part }: { body_part: bodyPart }) => {
  const type = body_part?.type || "Unknown";
  const desc = body_part?.description_en || body_part?.description_fi || "Unknown"
  return (
    <div className="mt-10">
    <table className="table-auto w-full">
      <caption>Body part.</caption>
      <tbody>
        <tr><td>Type</td><td>{type}</td></tr>
        <tr><td>Description</td><td>{desc}</td></tr>
        <tr><td>Location</td><td>{body_part?.location}</td></tr>
        <tr><td>Organs</td><td>{
          body_part?.organs?.map((organ,i) => (
            <BodyPart key={organ.identifier+"-"+i} body_part={organ} />
          ))}
        </td></tr>
      </tbody>
    </table>
    </div>
  );
}

const BodySegment = ({ body_segment }: { body_segment: bodySegment }) => {
  const type = body_segment?.type || "Unknown";
  const desc = body_segment?.description_en || body_segment?.description_fi || "Unknown"
  return (
    <div className="mt-10">
    <table className="table-auto w-full">
      <caption className="text-blue-500">Body segment </caption>
      <tbody>
        <tr><td>Type</td><td>{type}</td></tr>
        <tr><td>Percentage</td><td>{body_segment?.percentage}</td></tr>
        <tr><td>Description</td><td>{desc}</td></tr>
        <tr><td>BodyParts</td><td>{
            body_segment?.body_parts?.map((body_part,i) => (
             <BodyPart key={body_part.identifier+"-"+i} body_part={body_part} />
           ))}
          </td></tr>
        <tr><td>Connected segments</td><td>{
            body_segment?.connections?.map((connection,i) => (
              <BodySegment key={connection.identifier+"-"+i} body_segment={connection} />
            ))
          }
        </td></tr>
      </tbody>
    </table>
    </div>
  );
}

const Attribute = ({ attribute }: { attribute: attribute }) => {
  return <tr key={attribute.identifier}><td className="w-1/5">{attribute.key}</td><td>{attribute.value}</td></tr>

}

const Attributes = ({ attributes }: { attributes: [] | attribute[] }) => {
  return (
    <div className="mt-10">
    <table className="table-auto w-full">
      <tbody>
        {
          attributes?.map((attr,i) => {
            return <Attribute key={`${attr.identifier}-${i}`} attribute={attr} />
          })
        }
      </tbody>
    </table>
    </div>
  )
}

const Body = ({
  body,
  existence_type,
  metamorphosis_name,
  metamorphosis_interval,
  metamorphosis_period
}: {
  body: body,
  existence_type: string,
  metamorphosis_name: string,
  metamorphosis_interval: number,
  metamorphosis_period: number
}) => {
  const materia = body?.materia || "Unknown";
  const powers = body?.powers || "Unknown";
  const description = body?.description_en || body?.description_fi || "No description available"
  const segments = body?.body_segments || []
  const centerSides = body?.center_sides || 0
  const symmetricSides = ( centerSides > 1 ) ? centerSides : "No"
  const mins = body?.mins || []
  const maxes = body?.maxes || []
  const growths = body?.growths || []
  const skills = body?.skills || []

  return (
    <div className="bg-gray-100 rounded-r-lg px-10 p-10">
    <table className="table-auto w-full text-left">
      <caption className="text-blue-500 text-lg">Creature data</caption>
      <tbody>
        <tr><td className="pr-6">Name</td><td>{metamorphosis_name}</td></tr>
        <tr><td className="pr-6">Type</td><td>{existence_type}</td></tr>
        <tr><td className="pr-6">Metamorphosis</td><td>Interval {metamorphosis_interval} hours - Period {metamorphosis_period} days (values are more or less abstract)</td></tr>
        <tr><td className="pr-6">Materia</td><td>{materia}</td></tr>
        <tr><td className="pr-6">Minimum attributes</td><td><Attributes attributes={mins} /></td></tr>
        <tr><td className="pr-6">Maximum attributes</td><td><Attributes attributes={maxes} /></td></tr>
        <tr><td className="pr-6">Attribute growths</td><td><Attributes attributes={growths} /></td></tr>
        <tr><td className="pr-6">Skills</td><td><Attributes attributes={skills} /></td></tr>
        <tr><td className="pr-6">Powers</td><td></td></tr>
        <tr><td className="pr-6">Description</td><td>{description}</td></tr>
        <tr><td className="pr-6">Symmetric sides</td><td>{symmetricSides}</td></tr>
        <tr><td className="pr-6">Powers</td><td><BodyPowers powers={powers} /></td></tr>
        <tr><td className="pr-6">Segments</td><td>{
          segments.map((segment,i) => {
            return <BodySegment body_segment={segment} key={segment.identifier+"-"+i} />
          })}
        </td></tr>
      </tbody>
    </table>
    </div>
  );
}

// const Metamorphosis = ({ metamorphosis }: { metamorphosis:metamorphosis }) => {
//   console.log(metamorphosis)
//   const interval = metamorphosis?.interval || "Unknown";
//   const period = metamorphosis?.period || "Unknown";
//   const bodies = metamorphosis?.bodies || []
//   const bodiesData = bodies.map((body) => <Body body={body} key={body.identifier}/>)
//   console.log(bodiesData)
//   return (
//     <>
//       <Table bordered hover size="sm" variant="dark">
//         <caption>Different metamorphoses of this form.</caption>
//         <tbody>
//           <tr><td>Interval</td><td>{interval}</td></tr>
//           <tr><td>Period</td><td>{period}</td></tr>
//           <tr><td>Bodies</td><td>{bodiesData}</td></tr>
//         </tbody>
//       </Table>
//     </>
//   );
// }

const Existence = ({ existence }: { existence: existence }) => {
  const metamorphoses = existence?.metamorphoses || []
  const existence_type = existence.type

  return (
    <>
      {
        metamorphoses.map((metamorphosis) => {
          const metamorphosis_name = metamorphosis?.name_en || metamorphosis?.name_fi || "Unknown"
          const metamorphosis_interval = metamorphosis?.interval || 0
          const metamorphosis_period = metamorphosis?.period || 0
          return metamorphosis.bodies?.map((body,i) => {
            return <Body
                body={body}
                existence_type={existence_type}
                metamorphosis_name={metamorphosis_name}
                metamorphosis_interval={metamorphosis_interval}
                metamorphosis_period={metamorphosis_period}
                key={body.identifier+"-"+i}/>
          })
        })
      }
    </>
  );
}

const Taxon = ({ taxon, handleSelectRankClick, handleClearSelectRankClick, clicked }: {taxon: taxon.about_to_save | undefined, handleClearSelectRankClick: any, handleSelectRankClick: any, clicked: boolean}) => {
  if (!taxon) return
  const ref = useRef<HTMLDivElement>(null)

  const identifier = taxon?.identifier || "Unknown";
  const name = taxon?.name_en || taxon?.name_fi || identifier
  const taxon_rank = taxon?.taxon_rank || "Unknown";
  const taxon_parent = taxon?.taxon_parent || "Unknown";
  const existences = taxon?.existences || [];

  useEffect(() => {
    if (!ref) return
    if (!ref.current) return
    if (!clicked) return
    const el = ref.current
    if (el) el.scrollIntoView()
  }, [])

  const mmCount = existences.reduce((sum, i) => {
    const count = i.metamorphoses?.length || 0
    return sum + count }, 0)
  let bodyCount = 0;
  for (const e of existences) {
    const mm = e.metamorphoses || []
    for (const m of mm) {
      const bb = m.bodies || []
      bodyCount += bb.length
    }
  }

  const existences_word = existences.length > 1 ? "existences" : "existence"
  const metamorphoses_word = mmCount > 1 ? "metamorphoses" : "metamorphosis"
  const body_word = bodyCount > 1 ? "bodies" : "body"


  return (
    <>
      <section id="ref" ref={ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
              <h1 className="h2 mb-4">{name}</h1>
              <p className="text-xl text-gray-400">It has {existences.length} {existences_word}, {mmCount} {metamorphoses_word} and {bodyCount} {body_word}</p>
            </div>
            <div>
              <a role="button" className="text-blue-500 test-bold" onClick={handleClearSelectRankClick}>Back</a>
           </div>
           <div>
              <table className="table-auto w-full">
                <tbody>
                  <tr><td>Identifier</td><td>{identifier}</td></tr>
                  <tr><td>Taxon rank</td><td>{taxon_rank}</td></tr>
                  <tr><td>Taxon parent</td><td>{taxon_parent}</td></tr>
                  <tr><td>Name (en)</td><td>{taxon?.name_en}</td></tr>
                  <tr><td>Name (fi)</td><td>{taxon?.name_fi}</td></tr>
                  <tr><td>Description (en)</td><td>{taxon?.description_en}</td></tr>
                  <tr><td>Description (fi)</td><td>{taxon?.description_fi}</td></tr>
                  <tr><td>Taxon parents</td>
                    <td>
                      {
                        taxon.taxon_ranks?.map((r) => {
                          const name = r.name_en || r.name_fi || r.identifier
                          return <TaxonPreviewListItem name={name} taxon_rank={r.taxon_rank} identifier={r.identifier} key={r.identifier} handleSelectRankClick={handleSelectRankClick}/>
                        })
                      }

                    </td></tr>
                </tbody>
              </table>
           </div>
           <div>
              <ul className="flex flex-wrap text-sm font-medium text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400">
                {
                  existences.map((existence) => {
                    if (!existence.identifier) return "<></>"
                    if (!existence.type) return "<></>"
                    const ename = existence.name_en || existence.name_fi || existence.type
                    return (
                      //<li eventKey={existence.identifier} title={ename} key={existence.identifier}>
                      <li className="me-2" key={existence.identifier}>
                         <a href="#" aria-current="page" className="inline-block p-4 text-gray-500 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">
                          {ename}
                         </a>

                         <Existence existence={existence} key={existence.identifier}/>
                      </li>
                    )
                  })
                }
              </ul>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Taxon;


