Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {
        title: "Diaz Novza Pinasti",
        description:
          "Mahasiswa Universitas Ahmad Dahlan Yogyakarta",
        social: {
          ig: {
            url: "https://www.instagram.com/diaznovzap_/?hl=id",
            title: "diaznovzap_",
          },
          fb: {
            url: "#",
            title: "diaznovza",
          },
        },
        imageProfile:
          "image/profil2.png",
        },
        articles1: 
        {
          title : "Gunung Prau",
          description: "Gunung yang kali ini saya daki adalah gunung prau yang memiliki ketinggian 2.565 mdpl terletak di dieng, jawa tengah, indonesia. Telaga warna di dieng plateau ini terletak pada ketinggian 2000 mdpl, dimana pemandangan di tempat ini sangat indah. Nama dieng berasal dari bahasa sansekerta die hieyang ( edi dan aeng ) indah dan langka",
          thumbnail: 'image/prau.jpeg'
        },
        articles2: 
        {
          title: "Pangonan",
          description: "Gunung dengan ketinggian 2.300 mdpl ini menjadi banyak incaran para muda mudi dan doyan survive. Uniknya, sebagian besar pengunjung datang bukan untuk mendaki hingga puncak, melainkan mengunjungi sabana luas yang berada di badan gunung. Lokasinya yang masih satu komplek dengan wisata Candi Arjuna, Kawah Sikidang, dan Telaga Warna, memudahkan wisatawan untuk mengakses gunung ini.",
          thumbnail: "image/pangonan.jpeg"
        },
        articles3: 
        {
          title: "Gunung Slamet",
          description: "Gunung Slamet adalah gunung tertinggi di Jawa Tengah dan merupakan gunung tertinggi kedua di Pulau Jawa dengan ketinggian 3.432 mdpl. Pada masa penjelajahan dunia yang pertama Sir Frances Drake, seorang pelaut Inggris pada tahun 1580, ketika itu melihat Gunung Slamet dan segera mengarahkan perahunya dan berlabuh di Cilacap.",
          thumbnail: 'image/slamet.jpeg'
        },
      
    };
  },
}).mount("#app");
