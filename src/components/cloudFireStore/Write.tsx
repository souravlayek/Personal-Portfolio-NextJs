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

interface skillData {
  title: string
  value: number
}

interface experienceItem {
  visibility_index: number
  about: string
  additional_details: string
  end_time: string
  start_time: string
  title: string
  worked_for: string
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

const educationExperience: Array<experienceItem> = [
  {
    title: 'Secondary Examination',
    about:
      'I have Passed Secondary examination under west bengal board of secondary education with 79.85% marks.',
    additional_details: '',
    end_time: '2016',
    start_time: '',
    visibility_index: 1,
    worked_for: 'Chousal High School',
  },
  {
    title: 'Higher Secondary with Science',
    about:
      'I have passed higher secondary examination under West Bengal Council Of Higher Secondary Education in 2018 with 76.4% with Science Background.',
    additional_details: '',
    end_time: '2018',
    start_time: '2016',
    visibility_index: 2,
    worked_for: 'Chousal High School',
  },
  {
    title: 'Diploma in Computer science & Technology',
    about:
      'I have Passed all my previous semester with a CGPA of 8.4(Average). And also learn so many fundamentals.',
    additional_details: '',
    end_time: 'present',
    start_time: '2018',
    visibility_index: 3,
    worked_for: 'Achharyya Prafulla Chandra Ray Polytechnic',
  },
]

const workExperience: Array<experienceItem> = [
  {
    title: 'Front-end Developer Intern',
    about:
      'Here I learn How to work with a team and my contribution is I have helped other team member by building some of the component of that project. Mostly I use React Js.',
    additional_details: '',
    end_time: 'Oct',
    start_time: '2020 Sep',
    visibility_index: 1,
    worked_for: 'Lapolo',
  },
  {
    title: 'Android Dev Freelancer',
    about:
      'Here I use React Native to help a starup to build an hybrid app named Your paecel. That has social authentication and also uses location to sort data.',
    additional_details: '@upwork',
    end_time: 'Nov',
    start_time: '2020 Oct',
    visibility_index: 2,
    worked_for: 'Ankit & Co.',
  },
  {
    title: 'Lead Front-end Developer',
    about:
      'Back again to lapolo with a new post as lead front end developer. Uses react js and build three major websites and also get love from the team members.',
    additional_details: '',
    end_time: '2021 Mar',
    start_time: '2020 Dec',
    visibility_index: 3,
    worked_for: 'Lapolo',
  },
  {
    title: 'Front-end Developer',
    about:
      'now I got chance to a company based on uk and currently working here, Most of the projects I build with React js and some with Next js and also I use react native to build mobile apps here.',
    additional_details: '',
    end_time: 'Present',
    start_time: '2021 Mar',
    visibility_index: 4,
    worked_for: '3rdly.uk',
  },
]

const dev_skills: Array<skillData> = [
  {
    title: 'React JS',
    value: 90,
  },
  {
    title: 'Next JS',
    value: 75,
  },
  {
    title: 'React-Native',
    value: 85,
  },
  {
    title: 'Flutter',
    value: 80,
  },
]
const professional_skills: Array<skillData> = [
  {
    title: 'Communication',
    value: 90,
  },
  {
    title: 'Team work',
    value: 95,
  },
  {
    title: 'git',
    value: 90,
  },
  {
    title: 'Leadership',
    value: 85,
  },
]

const WriteToCloudFirestore = (): JSX.Element => {
  const sendData = (): void => {
    try {
      firebase
        .firestore()
        .collection('home')
        .doc('resume')
        .set({
          dev_skills: dev_skills,
          professional_skills: professional_skills,
          education_experience: educationExperience,
          work_experience: workExperience,
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
