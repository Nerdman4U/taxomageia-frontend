import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PropTypes from 'prop-types';

import TaxonPreviewListItem from '@/components/taxon-preview-list-item';

import body from '@/interfaces/body.interface.js';
import bodySegment from '@/interfaces/body_segment.interface.js';
import bodyPart from '@/interfaces/body_part.interface.js';
import attribute from '@/interfaces/attribute.interface.js';
import metamorphosis from '@/interfaces/metamorphosis.interface.js';
import metamorphosisChain from '@/interfaces/metamorphosis_chain.interface.js';
import taxon from '../interfaces/taxon.interface.js';

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
    <Table striped bordered hover variant="dark">
      <caption>Powers of this body.</caption>
      <tbody>
        <tr><td>Abilities</td><td>
        <Table striped bordered hover variant="dark">
          <tbody>     
           {
             Object.keys(powers.abilities).map((key) => (
              <BodyPowersTableRow key={key} powerName={key} value={powers.abilities[key]} />               
             ))
           }
          </tbody>
        </Table>
  
        </td></tr>
        <tr><td>Properties</td><td>{powers.properties?.join(",")}</td></tr>
        <tr><td>Inputs</td><td>{powers.inputs?.join(",")}</td></tr>
        <tr><td>Outputs</td><td>{powers.outputs?.join(",")}</td></tr>
      </tbody>
    </Table>
  )
}

const BodyPart = ({ body_part }: { body_part: bodyPart }) => {
  const type = body_part?.type || "Unknown";
  const desc = body_part?.description_en || body_part?.description_fi || "Unknown"
  return (
    <Table striped bordered hover variant="dark">
      <caption>Body of this metamorphosis.</caption>
      <tbody>
        <tr><td>Type</td><td>{type}</td></tr>
        <tr><td>Description</td><td>{desc}</td></tr>
        <tr><td>Location</td><td>{body_part?.location}</td></tr>
        <tr><td>Organs</td><td>{
          body_part?.organs?.map((organ) => (
            <BodyPart key={organ.identifier} body_part={organ} />
          ))}
        </td></tr>
      </tbody>
    </Table> 
  );   
}

const BodySegment = ({ body_segment }: { body_segment: bodySegment }) => {
  const type = body_segment?.type || "Unknown";
  const desc = body_segment?.description_en || body_segment?.description_fi || "Unknown"
  return (
    <Table striped bordered hover variant="dark">
      <caption>Body of this metamorphosis.</caption>
      <tbody>
        <tr><td>Type</td><td>{type}</td></tr>
        <tr><td>Percentage</td><td>{body_segment?.percentage}</td></tr>
        <tr><td>Description</td><td>{desc}</td></tr>
        <tr><td>BodyParts</td><td>{ 
            body_segment?.body_parts?.map((body_part) => (
             <BodyPart key={body_part.identifier} body_part={body_part} />
           ))}
          </td></tr>
        <tr><td>Connected segments</td><td>{
            body_segment?.connections?.map((connection) => (
              <BodySegment key={connection.identifier} body_segment={connection} />
            ))
          }
        </td></tr>
      </tbody>
    </Table> 
  );
}

const Attribute = ({ attribute }: { attribute: attribute }) => {
  return <tr key={attribute.identifier}><td>{attribute.key}</td><td>{attribute.value}</td></tr>
 
}

const Attributes = ({ attributes }: { attributes: [] | attribute[] }) => {
  return (
    <Table striped hover variant="dark">
      <tbody>
        {
          attributes?.map((attr,i) => {
            return <Attribute key={`${attr.identifier}-${i}`} attribute={attr} />
          })
        }
      </tbody>
    </Table>
  )  
}

const Body = ({ 
  body, 
  existence_name,
  existence_type,
  metamorphosis_name,
  metamorphosis_interval,
  metamorphosis_period
}: { 
  body: body, 
  existence_name: string,
  existence_type: string,
  metamorphosis_name: string,
  metamorphosis_interval: number,
  metamorphosis_period: number
}) => {
  const etype = body?.etype || "Unknown";
  const type = body?.type || "Unknown";
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
    <Table striped bordered hover variant="dark">
      <caption>Body of this metamorphosis.</caption>
      <tbody>
        <tr><td>Type</td><td>{metamorphosis_name} ({existence_name})</td></tr>
        <tr><td>Metamorphosis</td><td>Interval {metamorphosis_interval} hours - Period {metamorphosis_period} days (values are more or less abstract)</td></tr>
        <tr><td>Materia</td><td>{materia}</td></tr>
        <tr><td>Minimum attributes</td><td><Attributes attributes={mins} /></td></tr>
        <tr><td>Maximum attributes</td><td><Attributes attributes={maxes} /></td></tr>
        <tr><td>Attribute growths</td><td><Attributes attributes={growths} /></td></tr>
        <tr><td>Skills</td><td><Attributes attributes={skills} /></td></tr>
        <tr><td>Powers</td><td></td></tr>
        <tr><td>Description</td><td>{description}</td></tr>
        <tr><td>Symmetric sides</td><td>{symmetricSides}</td></tr>
        <tr><td>Powers</td><td><BodyPowers powers={powers} /></td></tr>
        <tr><td>Segments</td><td>{
          segments.map((segment) => {
            return <BodySegment body_segment={segment} key={segment.identifier} />
          })}
        </td></tr>
      </tbody>
    </Table> 
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

const Existence = ({ existence }: { existence: metamorphosisChain }) => {
  const identifier = existence?.identifier || "Unknown";
  const metamorphoses = existence?.metamorphoses || []
  const existence_name = existence?.name_en || existence?.name_fi || identifier
  const existence_type = existence?.type || "Unknown";
 
  return (
    <>
      {
        metamorphoses.map((metamorphosis) => {
          const ename = existence_name
          const metamorphosis_name = metamorphosis?.name_en || metamorphosis?.name_fi || metamorphosis.identifier
          const metamorphosis_interval = metamorphosis?.interval || 0
          const metamorphosis_period = metamorphosis?.period || 0
          for (const body of metamorphosis.bodies || []) {
            return <Body 
                body={body} 
                existence_name={ename} 
                metamorphosis_name={metamorphosis_name} 
                existence_type={existence_type}
                metamorphosis_interval={metamorphosis_interval}
                metamorphosis_period={metamorphosis_period}
                key={body.identifier}/>

          }
        })
      }
    </>
  );
}

const Taxon = ({ taxon, handleSelectRankClick, handleClearSelectRankClick }: {taxon: taxon | undefined, handleClearSelectRankClick: any, handleSelectRankClick: any}) => {
  if (!taxon) return
  const identifier = taxon?.identifier || "Unknown";  
  const name = taxon?.name_en || taxon?.name_fi || identifier
  const taxon_rank = taxon?.taxon_rank || "Unknown";
  const taxon_parent = taxon?.taxon_parent || "Unknown";
  const existences = taxon?.existences || []; 

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
      <section id="creature">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
              <h1 className="h2 mb-4">{name}</h1>
              <p className="text-xl text-gray-400">It has {existences.length} {existences_word}, {mmCount} {metamorphoses_word} and {bodyCount} {body_word}</p>
            </div>
            <div>
              <a role="button" onClick={handleClearSelectRankClick}>Back</a>
           </div>
           <div>
              <Table bordered striped hover size="sm" variant="dark">
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
              </Table>
           </div>        
           <div>
              <Tabs>
                { 
                  existences.map((existence) => {
                    if (!existence.identifier) return "<></>"
                    if (!existence.type) return "<></>"
                    return (
                      <Tab eventKey={existence.identifier} title={existence.type} key={existence.identifier}>
                        <Existence existence={existence} key={existence.identifier}/>
                      </Tab>
                    )
                  }) 
                }
              </Tabs>
           </div>
          </div>
        </div>
      </section>   
    </>  
  );
};

export default Taxon;


