import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import meta from 'metadata'

export const Privacy = () => {
  const { title, url } = meta['/privacy']
  const siteName = meta.common.siteName

  return (
    <>
      <Helmet>
        <title>{title} | {siteName}</title>

        <meta property='og:title' content={`${title} | ${siteName}`} />
        <meta property='og:site_name' content={siteName} />
        <meta property='og:url' content={url} />
        <meta property='og:type' content='website' />
      </Helmet>

      <article>
        {/* TODO: add site/company name, web address, and contact emails below */}
        <h1>Privacy Policy For `{siteName}`</h1>
        <p>Effective Date: 10/01/2018<br />Applicable To <Link to='/'>https://example.com</Link></p>

        <p><strong>Article 1 - DEFINITIONS</strong>:</p>
        <ol>
          <li><p><em>APPLICABLE WEBSITE</em>: This Privacy Policy will refer to and be applicable to the Website listed above, which shall hereinafter be referred to as "Website." Any listed Website may also refer to a corresponding mobile application, should one be currently in use or hereinafter developed.</p></li>
          <li><p><em>EFFECTIVE DATE</em>: "Effective Date" means the date this Privacy Policy comes into force and effect.</p></li>
          <li><p><em>PARTIES</em>: The parties to this privacy policy are the following owner: FnA Labs ("Owner") and You, as the user of this Website. Hereinafter, the parties will individually be referred to as "Party" and collectively as "Parties."</p></li>
          <li><p><em>OWNER</em>: Owner is the publisher, owner, and operator of the Website and is the Party responsible for the collection of information described herein. Owner shall be referred to either by Owner's name or "Owner," as listed above. If Owner or Owner's property shall be referred to through first-person pronouns, it shall be through the use of the following: Us, We, Our, Ours, etc.</p></li>
          <li><p><em>YOU</em>: Should You agree to this Privacy Policy and continue Your use of the Website, You will be referred to herein as either You, the User, or if any second-person pronouns are required and applicable, such pronouns as 'Your", "Yours", etc.</p></li>
          <li><p><em>PERSONAL INFORMATION</em>: "Personal Information" means information that we obtain from You in connection with Your use of the Website.</p></li>
        </ol>

        <p><strong>Article 2 - GENERAL INFORMATION</strong>:</p>
        <p>This privacy policy (hereinafter "Privacy Policy") describes how we collect and use information that We receive about You, as well as your rights in relation to that information collection, when You visit Our Website and interact with it in any way, including passively.</p>
        <p>This Privacy Policy does not cover any information that We may receive about You through sources other than the use of Our Website.The Website may link out to other websites or mobile applications, but this Privacy Policy does not and will not apply to any of those linked websites or applications.</p>
        <p>We are committed to the protection of Your privacy while You use Our Website.</p>
        <p>By continuing to use the Our Website, You acknowledge that You have had the chance to review and consider this Privacy Policy, and You acknowledge that You agree to it. This means that You also consent to the use of Your information and the method of disclosure as described in this Privacy Policy. If You do not understand the Privacy Policy or do not agree to it then you agree to immediately cease Your use of Our Website.</p>

        <p><strong>Article 3 - MODIFICATIONS AND REVISIONS</strong>:</p>
        <p>We reserve the right to modify, revise, or otherwise amend this Privacy Policy at any time and in any manner. Unless We specifically obtain Your consent, any changes to the Privacy Policy will only impact the information collected on or after the date of the change. It is Your responsibility to periodically check this page for any such modification, revision or amendment. Any changes made are assumed to have been accepted by Your Continued use of the Website.</p>

        <p><strong>Article 4 - HOW INFORMATION IS COLLECTED</strong>:</p>
        <p>Depending on how You use Our Website, You will be subject to different types of information collected and different manners of collection:</p>
        <ol>
          <li><p>Automatic Tracking: We may collect information from You through automatic tracking systems (such as information about your browsing preferences) and/or through information that You volunteer to Us (such as information that You provide during a registration process or at other times while using the Website.</p></li>
          <li><p>Unregistered Users: If You are a passive User of the Website and do not register at all, You may still be subject to certain passive data collection ("Passive Data Collection"). Such Passive Data Collection may include IP address information, location information, and certain browser data, such as history and/or session information.</p></li>
          <li><p>All Users: The Passive Data Collection which applies to Unregistered Users shall also apply to all other users and/or visitors of Our Website.</p></li>
        </ol>

        <p><strong>Article 5 - USE OF COOKIES</strong>:</p>
        <p>Cookies are small files stored on Your computer or mobile device which collect information about Your browsing behavior. We use cookies, along with other Passive Data Collection techniques and services to gather information about You through Your use of Our Website. These cookies do not access information which is stored on Your computer. Cookies do, however, enable Us to tailor Our configurations to Your needs and preferences, in order to improve Your user experience.</p>
        <p>Most internet browsers accept cookies automatically, although You are able to change Your browser settings to control cookies, including whether or not You accept them, and how to remove them. You may also be able to set Your browser to advise You if You receive a cookie, or to block or delete cookies. However, if You do this, You may be prevented from taking full advantage of the Website.</p>

        <p><strong>Article 6 - HOW INFORMATION IS STORED</strong>:</p>
        <p>We use secure physical and digital systems to store your Personal Information when appropriate. We ensure that your Personal Information is protected against unauthorized access, disclosure, or destructions.</p>
        <p>Please note, however, that no system involving the transmission of information via the internet, or the electronic storage of data, is completely secure. However, we take the protection and storage of Your Personal Information very seriously. We take all reasonable steps to protect Your Personal Information.</p>
        <p>The systems that We use to store Your information include but are not limited to:</p>
        <ul>
          <li><p>Google Analytics</p></li>
        </ul>
        <p>*You may choose to Opt-out of Google Analytics at any time by clicking the link below and then following further instructions.<br /><a href='https://tools.google.com/dlpage/gaoptout'>Google Analytics Opt-out Browser Add-on</a></p>

        <p><strong>Article 7 - HOW INFORMATION IS USED</strong>:</p>
        <p>We primarily use Your Personal Information to help Us provide a better experience for you on Our Website and to provide You the services and/or information You may have requested, such as use of Our Website.</p>
        <p>Information that does not identify You personally, but that may assist in providing Us broad overviews of Our customer base, will be used for market research or marketing efforts. Such information may include, but is not limited to, IP address or interests based on Your cookies.</p>
        <p>Personal Information that may be considering identifying may be used for the following:</p>
        <ol>
          <li><p>Improving Your personal user experience</p></li>
          <li><p>Providing customer service to You</p></li>
          <li><p>Advising You about updates to the Website or related Items</p></li>
        </ol>

        <p><strong>Article 8 - DISCLOSURE OF INFORMATION:</strong></p>
        <p>Although Our policy is to maintain the privacy of Your Personal Information as described herein, We may disclose Your Personal Information if We believe that it is reasonable to do so in certain cases, in Our sole and exclusive discretion. Such cases may include, but are not limited to:</p>
        <ol>
          <li><p>To satisfy any local, state, or Federal laws or regulations</p></li>
          <li><p>To respond to requests, such discovery, criminal, civil, or administrative process, subpoenas, court orders, or writs from law enforcement or other governmental or legal bodies</p></li>
          <li><p>To bring legal action against a user who has violated the law or violated the terms of use of Our Website</p></li>
          <li><p>As may be necessary for the operation of Our Website</p></li>
          <li><p>To generally cooperate with any lawful investigation about Our Users</p></li>
          <li><p>If We suspect any fraudulent activity on Our Website or if We have noticed any activity which may violate our terms or other applicable rules</p></li>
        </ol>

        <p><strong>Article 9 - OPTING OUT OF TRANSMITTALS FROM US</strong>:</p>
        <p>From time to time, We may send You informational or marketing communications related to Our Website such as announcements or other information. If You wish to opt-out of such communications, You may contact the following email: <a href='mailto:contact@example.com'>contact@example.com</a>. You may also click the opt-out link which will be provided at the bottom of any and all such communications.</p>
        <p>Please be advised that even though You may opt-out of such communications, You may still receive information from Us that is specifically about Your use of Our Website or about Your account with Us.</p>
        <p>By providing any Personal Information to us, or by using Our Website in any manner, You have created a commercial relationship with Us. As such, You agree that any email sent from Us or third-party affiliates, even unsolicited email, shall specifically not be considered SPAM, as that term is legally defined.</p>

        <p><strong>Article 10 - MODIFYING YOUR INFORMATION</strong>:</p>
        <p>If you wish to modify any information We may have about You, or You wish to simply access any information We have about You, You may reach out to Us at the following email address: <a href='mailto:contact@example.com'>contact@example.com</a>.</p>

        <p><strong>Article 11 - ACCEPTANCE OF RISK</strong>:</p>
        <p>By continuing to Our Website in any manner, use the Product, You manifest Your continuing asset to this Privacy Policy. You further acknowledge, agree and accept that no transmission of information or data via the internet is not always completely secure, no matter what steps are taken. You acknowledge, agree and accept that We do not guarantee or warrant the security of any information that You provide to Us, and that You transmit such information at Your own risk.</p>

        <p><strong>Article 12 - CUSTOMER SERVICE CONTACT INFORMATION</strong>:</p>
        <p>If You have any questions about this Privacy Policy or the way We collect information from You, or if You would like to launch a complaint about anything related to this Privacy Policy, You may contact Us at the following email address: <a href='mailto:contact@example.com'>contact@example.com</a>.</p>
        {/* /TODO */}
      </article>
    </>
  )
}
