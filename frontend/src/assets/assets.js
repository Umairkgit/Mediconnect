import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Richard James emphasizes a holistic approach to patient care, combining preventive care with modern diagnostics for accurate treatment plans. His focus is on empowering patients to lead healthier lifestyles.',
        fees: 50,
        address: {
            line1: '12 Maple Street',
            line2: 'South Kensington, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Emily Larson has extensive experience in women’s health, particularly in prenatal and postnatal care. She is passionate about providing personalized care to ensure the well-being of her patients.',
        fees: 60,
        address: {
            line1: '45 Elm Grove',
            line2: 'Hampstead, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Nolan Harwerd',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Nolan Harwerd is dedicated to treating skin conditions with the latest advancements in dermatology. He is committed to providing effective treatment plans for his patients to achieve healthy skin.',
        fees: 30,
        address: {
            line1: '89 Brixton Road',
            line2: 'Brixton, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Christopher Lee is passionate about child health and development. He provides compassionate care, ensuring that his young patients receive the best treatment and guidance for a healthy start to life.',
        fees: 40,
        address: {
            line1: '62 Cedar Avenue',
            line2: 'Notting Hill, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jennifer Garcia is highly skilled in diagnosing and treating neurological disorders. She is dedicated to helping her patients improve their quality of life through targeted treatments and personalized care.',
        fees: 50,
        address: {
            line1: '18 Belmont Road',
            line2: 'Chelsea, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Andrew Williams specializes in treating complex neurological conditions. His patient-centered approach and expertise help him provide comprehensive care to those dealing with brain and nervous system disorders.',
        fees: 50,
        address: {
            line1: '23 Oxford Street',
            line2: 'Covent Garden, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Sarah Patel',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sarah Patel offers a patient-first approach to general medicine, focusing on preventive healthcare and early intervention. Her dedication to her patients helps them achieve better long-term health outcomes.',
        fees: 50,
        address: {
            line1: '87 Park Lane',
            line2: 'Connaught Place, New Delhi'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Aishwarya Malhotra',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Aishwarya Malhotra is committed to advancing women’s health through compassionate care. Her expertise spans gynecological procedures and patient education, ensuring women receive comprehensive care.',
        fees: 60,
        address: {
            line1: '5 Westbourne Terrace',
            line2: 'Paddington, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Ava Mitchell focuses on diagnosing and treating a wide range of skin disorders. Her goal is to provide effective and personalized skincare solutions for her patients.',
        fees: 30,
        address: {
            line1: '28 Rosewood Avenue',
            line2: 'Islington, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Rohit Kumar',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Rohit Kumar’s compassionate care for children sets him apart. He combines clinical expertise with a warm, friendly approach to make sure his young patients are comfortable and well cared for.',
        fees: 40,
        address: {
            line1: '19 Lily Road',
            line2: 'Southall, Kolkata'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Farah Khan',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Farah Khan is a renowned neurologist who offers specialized care in treating disorders of the brain and nervous system. She is known for her thorough and compassionate approach to treatment.',
        fees: 50,
        address: {
            line1: '43 Chandni Chowk Road',
            line2: 'Lajpat Nagar, New Delhi'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Ivana Singh',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ivana Singh specializes in neurological health and is dedicated to diagnosing and treating complex neurological disorders. She focuses on patient education and preventive measures for long-term health.',
        fees: 50,
        address: {
            line1: '183 Hillview Lane',
            line2: 'Greater Kailash, New Delhi'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Sanjay Khurana',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sanjay Khurana practices general medicine with a focus on early detection and prevention. His proactive approach ensures that patients receive personalized care and treatment for a variety of conditions.',
        fees: 50,
        address: {
            line1: '15 Walnut Street',
            line2: 'Soho, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan Martinez is highly skilled in women’s reproductive health and is dedicated to providing care for women through all stages of life. His expertise in gynecological surgery is widely recognized.',
        fees: 60,
        address: {
            line1: '35 Orchard Place',
            line2: 'Shoreditch, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Amelia Hill offers cutting-edge treatments in dermatology and is dedicated to providing personalized care for her patients. Her goal is to improve skin health and patient confidence.',
        fees: 30,
        address: {
            line1: '66 Crescent Drive',
            line2: 'Camden Town, London'
        }
    },
    

    
]