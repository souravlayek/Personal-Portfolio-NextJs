import firebase from 'firebase/app'
import 'firebase/firestore'

interface projectItem {
  title: string
  about: string
  challenges: string
  image: string
  small_details: string
  tech_used: string[]
  type: 'mobile' | 'web' | 'other'
}

const generateProject = (props: projectItem) => {
  return { ...props }
}

const projects: Array<projectItem> = [
  {
    title: 'Your Parcel',
    about:
      'Your Parcel is a bridge between small businesses and delivery people. It uses a location for searching nearby delivery person and then a small business owner can ask him to deliver that parcel. This app is built with react-native with lots of features like location-based search and one tap and OTP login',
    challenges:
      'Building location-based search is quite complex for me to back then. I have searched on google and read a lot and build who is near to the business owner will be visible first.',
    small_details:
      'It is a react-native app with location-based sorting. It is mainly a bridge between small business owners and delivery people.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/souravlayekportfolio.appspot.com/o/projects%2Fyp.png?alt=media&token=5e2cdafc-306b-42a0-807a-6f6dce6e4933',
    tech_used: ['react-native', 'django', 'javascript'],
    type: 'mobile',
  },
  {
    title: 'The Indian Polo Awards',
    about:
      'This site is one of my first sites to be built, it uses react js I have built the site with fewer packages most of the features were built by me, and also got appreciation from the company. It is mainly a showcase site for the Indian polo awards.',
    challenges:
      'This site came with a very short time, and I was new to react but with all of those challenges I read and work hard to build and ready this site for production launch, and then got an appreciation from the company.',
    small_details:
      'This website built with react js and connected backend through rest APIs to be a showcase site for the Indian polo awards.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/souravlayekportfolio.appspot.com/o/projects%2Ftipa.png?alt=media&token=6deae4e9-a328-4ba4-b86b-e5b19300aadb',
    tech_used: ['react', 'django', 'javascript'],
    type: 'web',
  },
  {
    title: 'Personal Portfolio',
    about:
      'This site was my portfolio with one of the most good-looking theme neumorphism, I have used react to build and make it more interactive for the visitor and make it a more simple and minimal look.',
    challenges:
      'The main challenge for this to build the neumorphic design and maintaining the minimal look and after some research on UI and UX, I have made this design and build it and serve it to the internet.',
    small_details:
      'This site was my portfolio with one of the most good-looking theme neumorphism, I have used react to build and make it more interactive for the visitor and make it a more simple and minimal look.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/souravlayekportfolio.appspot.com/o/projects%2Fportfolio.png?alt=media&token=571ad4e4-e7cd-4331-b40e-4f2a80ee4fa9',
    tech_used: ['react', 'javascript'],
    type: 'web',
  },
  {
    title: 'Personal Portfolio',
    about:
      'This visual studio code extension is truly for me I used to forget task and procrastinate and as this is a part of my code editor it helps me for accomplish my tasks so fast and make me more organized person.',
    challenges:
      'There are lots of challenges but mainly the less availability of study material to build a vs-code extension is hard, but I read the documentation carefully and made this and now it is serving so many people.',
    small_details:
      'VSTODO the extension for those who often forget task or who want to manage task.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/souravlayekportfolio.appspot.com/o/projects%2Fvstodo.png?alt=media&token=12b60c10-dd12-4f47-80f8-55718e1cdd44',
    tech_used: ['visual-studio-code', 'javascript', 'typescript'],
    type: 'other',
  },
  {
    title: 'RemPass',
    about:
      'RemPass is an easy-to-use minimal simple password manager, we keep your password locally with encrypted password and access through biometric. No need to remember the password to access your password use just biometric.',
    challenges:
      "The main challenge is the security, and testing the app extensively, I used crypto(AES algorithm) to make it secure and also I don't save any data to web so it is more secure and test for with a team of internal tester.",
    small_details:
      'RemPass is an easy-to-use minimal simple password manager built with flutter and use biometric authentication.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/souravlayekportfolio.appspot.com/o/projects%2Frempass.png?alt=media&token=56af6764-6c39-4da4-adeb-3aaf5475ca20',
    tech_used: ['flutter', 'dart'],
    type: 'mobile',
  },
]

const WriteToCloudFirestore = (): JSX.Element => {
  const sendData = (): void => {
    try {
      firebase
        .firestore()
        .collection('myCollection')
        .doc('my_document')
        .set({
          projects: projects,
        })
        .then(() => alert('data successfully send to backend'))
    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <>
      <button onClick={() => sendData()}>Send data</button>
    </>
  )
}

export default WriteToCloudFirestore
