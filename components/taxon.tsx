import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PropTypes from 'prop-types';

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

const BodyPart = ({ bodyPart }: { bodyPart: bodyPart }) => {
  const type = bodyPart?.type || "Unknown";
  const desc = bodyPart?.description_en || bodyPart?.description_fi || "Unknown"
  return (
    <Table striped bordered hover variant="dark">
      <caption>Body of this metamorphosis.</caption>
      <tbody>
        <tr><td>Type</td><td>{type}</td></tr>
        <tr><td>Description</td><td>{desc}</td></tr>
        <tr><td>Location</td><td>{bodyPart?.location}</td></tr>
        <tr><td>Organs</td><td>{
          bodyPart?.organs?.map((organ) => (
            <BodyPart key={organ.identifier} bodyPart={organ} />
          ))}
        </td></tr>
      </tbody>
    </Table> 
  );   
}

const BodySegment = ({ bodySegment }: { bodySegment: bodySegment }) => {
  const type = bodySegment?.type || "Unknown";
  const desc = bodySegment?.description_en || bodySegment?.description_fi || "Unknown"
  return (
    <Table striped bordered hover variant="dark">
      <caption>Body of this metamorphosis.</caption>
      <tbody>
        <tr><td>Type</td><td>{type}</td></tr>
        <tr><td>Percentage</td><td>{bodySegment?.percentage}</td></tr>
        <tr><td>Description</td><td>{desc}</td></tr>
        <tr><td>BodyParts</td><td>{ 
            bodySegment?.bodyParts?.map((bodyPart) => (
             <BodyPart key={bodyPart.identifier} bodyPart={bodyPart} />
           ))}
          </td></tr>
        <tr><td>Connected segments</td><td>{
            bodySegment?.connections?.map((connection) => (
              <BodySegment key={connection.identifier} bodySegment={connection} />
            ))
          }
        </td></tr>
      </tbody>
    </Table> 
  );
}

const Attributes = ({ attributes }: { attributes: [] | attribute[] }) => {
  return (
    <Table striped hover variant="dark">
      <tbody>
        {
          attributes?.map((attribute) => (
            <tr key={attribute.identifier}><td>{attribute.key}</td><td>{attribute.value}</td></tr>
          ))
        }
      </tbody>
    </Table>
  )  
}

const Body = ({ body }: { body: body }) => {
  const type = body?.type || "Unknown";
  const materia = body?.materia || "Unknown";
  const powers = body?.powers || "Unknown";
  const description = body?.description_en || body?.description_fi || "No description available"
  const segments = body?.bodySegments || []
  const centerSides = body?.centerSides || 0
  const symmetricSides = ( centerSides > 1 ) ? centerSides : "No" 
  const mins = body?.mins || []  
  const maxes = body?.maxes || []
  const growths = body?.growths || []
  const skills = body?.skills || []

  return (
    <Table striped bordered hover variant="dark">
      <caption>Body of this metamorphosis.</caption>
      <tbody>
        <tr><td>Type</td><td>{type}</td></tr>
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
            return <BodySegment bodySegment={segment} key={segment.identifier} />
          })}
        </td></tr>
      </tbody>
    </Table> 
  );  
}

const Metamorphosis = ({ metamorphosis }: { metamorphosis:metamorphosis }) => {
  console.log(metamorphosis)  
  const interval = metamorphosis?.interval || "Unknown";
  const period = metamorphosis?.period || "Unknown";
  const bodies = metamorphosis?.bodies || []
  const bodiesData = bodies.map((body) => <Body body={body} key={body.identifier}/>)
  console.log(bodiesData)
  return (
    <>
      <Table bordered hover size="sm" variant="dark">
        <caption>Different metamorphoses of this form.</caption>
        <tbody>
          <tr><td>Interval</td><td>{interval}</td></tr>
          <tr><td>Period</td><td>{period}</td></tr>
          <tr><td>Bodies</td><td>{bodiesData}</td></tr>
        </tbody>
      </Table>
    </>
  );
}

const Existence = ({ existence }: { existence: metamorphosisChain }) => {
  const identifier = existence?.identifier || "Unknown";
  const metamorphoses = existence?.metamorphoses || []

  return (
    <>
      { metamorphoses.map((metamorphosis) => <Metamorphosis metamorphosis={metamorphosis} key={identifier}/>) }    
    </>
  );
}

const Taxon = ({ taxon, handleClearSelectRankClick }: {taxon: taxon | undefined, handleClearSelectRankClick: any}) => {
  if (!taxon) return
  const identifier = taxon?.identifier || "Unknown";  
  const name = taxon?.name_en || taxon?.name_fi || identifier
  const taxonRank = taxon?.taxonRank || "Unknown";
  const taxonParent = taxon?.taxonParent || "Unknown";
  const description = taxon?.description_en || taxon?.description_fi || "Unknown"
  const existences = taxon?.ages || []; 

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
      <div>
        <a onClick={handleClearSelectRankClick}>Back</a>
      </div>
      <section id="creatures">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
              <h1 className="h2 mb-4">{name}</h1>
              <p className="text-xl text-gray-400">It has {existences.length} {existences_word}, {mmCount} {metamorphoses_word} and {bodyCount} {body_word}</p>
            </div>

              <Table bordered hover size="sm" variant="dark">
                <tbody>
                  <tr><td>Identifier</td><td>{identifier}</td></tr>
                  <tr><td>Taxon rank</td><td>{taxonRank}</td></tr>
                  <tr><td>Taxon parent</td><td>{taxonParent}</td></tr>
                  <tr><td>Description</td><td>{description}</td></tr>
                </tbody>
              </Table>
        
              <Tabs>
                { 
                  existences.map((existence) => {
                    if (!existence.identifier) return "<></>"
                    if (!existence.type) return "<></>"
                    return <Tab eventKey={existence.identifier} title={existence.type} key={existence.identifier}><Existence existence={existence} key={existence.identifier}/></Tab>
                  }) 
                }
              </Tabs>
          </div>
        </div>
      </section>
    
    </>  
  );
};

Body.propTypes = {
  body: PropTypes.shape({
    type: PropTypes.string,
    materia: PropTypes.string,
    powers: PropTypes.array,
    description: PropTypes.string,
    bodySegments: PropTypes.array,
  })
}

Metamorphosis.propTypes = {
  metamorphosis: PropTypes.shape({
    identifier: PropTypes.string.isRequired,
    interval: PropTypes.number.isRequired,
    period: PropTypes.number.isRequired,
    bodies: PropTypes.array.isRequired,
  })
}

Existence.propTypes = {
  existence: PropTypes.shape({
    type: PropTypes.string,
    identifier: PropTypes.string.isRequired,
    metamorphoses: PropTypes.array.isRequired,
  })
}

Taxon.propTypes = {
  taxon: PropTypes.shape({
    identifier: PropTypes.string.isRequired,
    name_fi: PropTypes.string,
    name_en: PropTypes.string,
    taxonRank: PropTypes.string.isRequired,
    taxonParent: PropTypes.string,
    description_fi: PropTypes.string,
    description_en: PropTypes.string,
    ages: PropTypes.array.isRequired,
  }),
  handleClearSelectRankClick: PropTypes.func
};




export default Taxon;

