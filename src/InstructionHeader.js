import React, { Fragment } from 'react'
import { EuiSpacer, EuiText } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css'

const InstructionHeader = () => {
  return (
    <Fragment>
      <EuiSpacer size="l" />
      <EuiText>
        <h1 style={{ textAlign: "center" }}>
          করোনাভাইরাস/কোভিড-১৯ :: স্বাস্থ্যসেবা কর্তৃপক্ষের সাথে যোগাযোগ করা কি প্রয়োজন?
        </h1>
      </EuiText>
      <EuiSpacer size="l" />
      <EuiText>
        <h2 style={{ textAlign: "center" }}>
          <strong>– জেনে নিন আপনার নিজের যত্ন নিজে নিতে পারবেন, নাকি সাস্হ্যসেবা কর্তৃপক্ষের সহায়তা দরকার </strong>
        </h2>
      <EuiSpacer size="l" />
      </EuiText>
    </Fragment>
  )
}

export default InstructionHeader