export function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-6 sm:grid sm:grid-cols-2 sm:grid-rows-3 md:grid md:grid-cols-3 md:grid-rows-3 md:justify-center  lg:flex lg:flex-wrap lg:justify-evenly">
        {card(
          "Contact Us",
          "Phone:" ,
          "123-456-7890",
          "Email: contact@example.com",
          "Address: 123 Main St, City, Country"
        )}
        {card(
          "Services",
          "Web Development",
          "Mobile Apps",
          "Cloud Services",
          "UI/UX Design",
          "SEO Optimization"
        )}
        {card("About Us", "Our Team", "Our Mission", "Careers")}
        {card(
          "Support",
          "Help Center",
          "FAQ",
          "Live Chat",
          "Email Support",
          "Phone Support"
        )}
        {card("Legal", "Privacy Policy", "Terms of Service", "Cookie Policy")}
        {card(
          "Follow Us",
          "Facebook",
          "Twitter",
          "LinkedIn",
          "Instagram",
          "YouTube"
        )}
      </div>
    </>
  );
}
function card(Main, text1, text2, text3, text4, text5, text6) {
  return (
    <>
      <div className=" w-[150px] sm:p-1 sm:m-1 md:p-3 md:m-3 ">
        <h3 className="font-semibold  text-white border-b-4 border-yellow-500 w-20 rounded-sm pb-2 ">
          {Main}
        </h3>
        <ul className="text-gray-500 text-sm font-semibold my-2 text-wrap  ">
          <li>{text1}</li>
          <li>{text2}</li>
          <li>{text3}</li>
          <li>{text4}</li>
          <li>{text5}</li>
          <li>{text6}</li>
        </ul>
      </div>
    </>
  );
}
