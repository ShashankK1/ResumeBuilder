import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 10
  },
  section: {
    columnGap: '10pt',
    display: 'flex',
    flexDirection: 'row',
    // flexGrow: 1,
  },
  section2: {
    columnGap: '6pt',
    fontSize: 10
  },
  bigTexts: {
    fontSize: 20,
    fontWeight: 400,
  },
  smallTexts: {
    fontSize: 10,
    fontWeight: 200,
  },
  midTexts: {
    fontSize: 17,
    fontWeight: 400,
  },
  texts: {
    fontSize: 12,
    fontWeight: 200
  },
  header: {
    fontSize: 14,
    fontWeight: 300
  }
  ,
  section3: {
    marginTop: '20pt'
  },
  section4: {
    marginTop: '6pt',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  section5: {
    marginTop: '3pt'
  }
});

const View1 = (props) => {
  return (
    <>
      
      <View style={styles.section3}>
        <Text style={styles.midTexts}>{props.data[0].companyName0 !== "" && props.type}</Text>
      </View>
      {
        props.data.map((exp, idx) => {
          return (<>
            <View style={styles.section4} key={idx}>
              <Text style={styles.header}>{exp[`companyName${idx}`]}  {exp[`role${idx}`]}</Text>
              <Text style={styles.texts}>{exp[`jobduration${idx}`]}</Text>
            </View>
            <View style={styles.section5}>
              <Text style={styles.texts}>
                {exp[`work${idx}`]}
              </Text>
            </View>
          </>)
        })
      }

    </>
  )
}

const View2 = (props) => {
  return (
    <>
      <View style={styles.section3}>
        <Text style={styles.midTexts}>{props.data[0].institute0 !== "" && props.type}</Text>
      </View>
      {
        props.data.map((exp, idx) => {
          return (
            <View style={styles.section4} key={idx}>
              <Text style={styles.header}>{exp[`institute${idx}`]}   {exp[`qualification${idx}`]}   {exp[`marks${idx}`]}</Text>
              <Text style={styles.texts}>{exp[`duration${idx}`]}</Text>
            </View>
          )
        })
      }

    </>
  )
}

const View3 = (props) => {
  return(
    <>
    <View style={styles.section3}>
        <Text style={styles.midTexts}>{props.data.length> 0 && props.type}</Text>
    </View>
    <View style={styles.section4}>
      <Text style={styles.texts}>{props.data.join(', ')}</Text>
    </View>
    </>
  )
}

const Viewer = ({ store }) => (
  <Document pageLayout='singlePage'>
    <Page size="A4" style={styles.page} wrap={true}>
      <View style={styles.section}>
        <Text style={styles.bigTexts}>{store.details.name}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.smallTexts}>{store.details.phone}</Text>
        <Text style={styles.smallTexts}>{store.details.email}</Text>
        <Text style={styles.smallTexts}>{store.details.address}</Text>
      </View>
      {store.experience.length>0 && <View1 type="Experience" data={store.experience} />}
      {store.education.length>0 && <View2 type="Education/Qualification" data={store.education}/>}
      {store.skills.length>0 && <View3 type="Skills" data={store.skills}/>}
    </Page>
  </Document>
);

export default Viewer;