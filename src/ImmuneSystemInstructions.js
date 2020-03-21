import React, { Fragment } from 'react'
import { EuiSpacer, EuiText } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css'


const ImmuneSystemInstructions = () => {
  return (
    <Fragment>
      <EuiText>
        <h2>
          আপনি কি কোন ধরণের সিস্টেস্ট্যাটিক ড্রাগ, কোর্টিসন ট্যাবলেট, অটোইমিউন ডিজিজ ড্রাগ (রিউমাটয়েড আর্থ্রাইটিস বা এধরণের অসুখ) ?
        </h2>
      </EuiText>
      <EuiText>
        <h2>
          আপনার কী কোন অঙ্গ প্রতিস্থাপণ হয়েছে, অথবা প্লীহা (spleen) অপারেশন, অথবা চিকিৎসাহীন অবস্থায় HIV বা এমন কোন অসুস্হতা আছে যা আপনার প্রতিরোধ ব্যবস্থার জন্য ক্ষতিকর?
        </h2>
      </EuiText>
      <EuiSpacer size="m" />
    </Fragment>
  )
}

export default ImmuneSystemInstructions