const photos = {
    1 : "https://redhousestaging.com/wp-content/uploads/2020/08/Fireplace-Staging-Tips-1200x768.jpg",
    2 : "https://novacancy-atl.com/wp-content/uploads/2018/12/NoVacancyHomeStaging_LivingRoomwithFireplace.jpg",
    3 : "https://virtuallystagingproperties.com/wp-content/uploads/2014/08/iStock-692601408-1-scaled.jpg",
    4 : "https://assets-global.website-files.com/6452fc5f71b71358e5f0d512/646fba92dc908dfb79cfe119_64090d7578e87b6b1415aca5_Blog%2520Headers%2520(2)%2520(1)%2520(1).jpeg",
    5 : "https://www.visualwatermark.com/images/posts/Fotolia_49445776_Subscription_Monthly_M.jpg",
    6 : "https://www.kylehandy.com/wp-content/uploads/2022/01/t-6860-1636333951633-2a466cbe8c5b178cbc84017fb23a1b70.jpeg",
    7 : "https://cdn.shopify.com/s/files/1/0310/3571/9739/files/Real_Estate_Drone_Photography_Tips_-_Best_Lens_for_Real_Estate_Photography_-_Sunny_16_2048x2048.jpg",
    8 : "https://s3-media0.fl.yelpcdn.com/bphoto/SFgPJVgMm50298poYukxEQ/300s.jpg",
}

var listings = [
    {
        ownerName: "Priya",
        amenities: ["wifi", "parking", "AC"],
        rate: 1200,
        minRentalTime: 1,
        maxRentalTime: 7,
        available: true,
        story: "I've always loved creating cozy spaces where people can feel at home. My place is perfect for solo travelers or couples looking for a peaceful retreat.",
        photoUrl: photos[1],
        location: "Goa"
    },
    {
        ownerName: "Aisha",
        amenities: ["wifi", "gym", "pool"],
        rate: 1800,
        minRentalTime: 3,
        maxRentalTime: 14,
        available: true,
        story: "Welcome to my little paradise! Whether you want to relax by the pool or work out in the gym, my place has everything you need for a fantastic stay.",
        photoUrl: photos[2],
        location: "Kerala"
    },
    {
        ownerName: "Sneha",
        amenities: ["wifi", "parking", "kitchen"],
        rate: 900,
        minRentalTime: 2,
        maxRentalTime: 10,
        available: true,
        story: "I'm passionate about cooking, and my fully-equipped kitchen reflects that. Feel free to whip up your favorite meals during your stay!",
        photoUrl: photos[3],
        location: "Jaipur"
    },
    {
        ownerName: "Deepika",
        amenities: ["wifi", "parking", "AC"],
        rate: 1500,
        minRentalTime: 1,
        maxRentalTime: 7,
        available: true,
        story: "As an avid traveler myself, I understand the importance of a comfortable and welcoming accommodation. Let my place be your home away from home!",
        photoUrl: photos[4],
        location: "Mumbai"
    },
    {
        ownerName: "Ananya",
        amenities: ["wifi", "garden", "AC"],
        rate: 2000,
        minRentalTime: 2,
        maxRentalTime: 10,
        available: true,
        story: "Escape to the tranquility of my garden oasis. Whether you're here for business or leisure, you'll find serenity and comfort in every corner.",
        photoUrl: photos[5],
        location: "Bangalore"
    },
    {
        ownerName: "Neha",
        amenities: ["wifi", "parking", "gym"],
        rate: 1300,
        minRentalTime: 2,
        maxRentalTime: 14,
        available: true,
        story: "Stay active and energized during your trip with access to my on-site gym facilities. After a workout, unwind in the cozy comfort of your room.",
        photoUrl: photos[6],
        location: "Delhi"
    },
    {
        ownerName: "Pooja",
        amenities: ["wifi", "pool", "AC"],
        rate: 1700,
        minRentalTime: 3,
        maxRentalTime: 10,
        available: true,
        story: "Dive into relaxation with a refreshing swim in the pool, or simply soak up the sun on the poolside deck. Your perfect getaway awaits!",
        photoUrl: photos[7],
        location: "Chennai"
    },
    {
        ownerName: "Kavita",
        amenities: ["wifi", "parking", "AC"],
        rate: 1100,
        minRentalTime: 1,
        maxRentalTime: 7,
        available: true,
        story: "Experience the warmth of Indian hospitality at my cozy abode. From cultural experiences to culinary delights, your stay will be unforgettable!",
        photoUrl: photos[8],
        location: "Hyderabad"
    },
    {
        ownerName: "Meera",
        amenities: ["wifi", "parking", "AC"],
        rate: 1400,
        minRentalTime: 2,
        maxRentalTime: 10,
        available: true,
        story: "Discover the vibrant colors and rich traditions of India from the comfort of my modern yet culturally inspired space. Welcome to your Indian getaway!",
        photoUrl: photos[1],
        location: "Goa"
    },
    {
        ownerName: "Riya",
        amenities: ["wifi", "parking", "garden"],
        rate: 1600,
        minRentalTime: 2,
        maxRentalTime: 14,
        available: true,
        story: "Step into my lush garden retreat and leave the hustle and bustle of the city behind. Embrace nature's tranquility as you unwind in your own private haven.",
        photoUrl: photos[2],
        location: "Kerala"
    },
    {
        ownerName: "Shreya",
        amenities: ["wifi", "parking", "AC"],
        rate: 1200,
        minRentalTime: 2,
        maxRentalTime: 10,
        available: true,
        story: "Welcome to my stylish and comfortable space! Whether you're here for work or leisure, my home is your perfect base for exploring the city.",
        photoUrl: photos[3],
        location: "Jaipur"
    },
    {
        ownerName: "Divya",
        amenities: ["wifi", "pool", "AC"],
        rate: 1900,
        minRentalTime: 1,
        maxRentalTime: 7,
        available: true,
        story: "Dive into luxury and relaxation at my stunning poolside retreat. Every detail is designed to make your stay unforgettable. Welcome to paradise!",
        photoUrl: photos[4],
        location: "Mumbai"
    },
    {
        ownerName: "Mitali",
        amenities: ["wifi", "parking", "gym"],
        rate: 1500,
        minRentalTime: 2,
        maxRentalTime: 14,
        available: true,
        story: "Stay fit and fabulous during your trip with access to my state-of-the-art gym facilities. After a workout, unwind in the comfort of your chic room.",
        photoUrl: photos[5],
        location: "Bangalore"
    },
    {
        ownerName: "Tanvi",
        amenities: ["wifi", "parking", "AC"],
        rate: 1350,
        minRentalTime: 2,
        maxRentalTime: 10,
        available: true,
        story: "Indulge in the comforts of my elegant and inviting space. From cozy nights in to exploring the vibrant city, your stay promises to be unforgettable.",
        photoUrl: photos[6],
        location: "Delhi"
    },
    {
        ownerName: "Swati",
        amenities: ["wifi", "parking", "pool"],
        rate: 1750,
        minRentalTime: 3,
        maxRentalTime: 10,
        available: true,
        story: "Escape the heat and take a dip in my refreshing pool",
        photoUrl : photos[7],
        location: "Chennai"
    }
];


function addListing( listing ){
    listings.push(listing);
}

export { listings, addListing };