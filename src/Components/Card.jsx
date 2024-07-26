export function Card() {
    return (
      <>
        <div className="bg-white max-w-sm lg:max-w-3xl lg:max-h-48 mx-auto rounded-lg overflow-hidden shadow-md">
          <div className="grid md:grid-cols-2">
            <img
              className="w-full h-48 md:h-full object-cover"
              src="https://images.pexels.com/photos/15656549/pexels-photo-15656549/free-photo-of-woman-putting-a-meat-dish-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman putting a meat dish on a table"
            />
            <div className="p-4">
              <div className="uppercase tracking-wide text-xs text-indigo-600 font-semibold">
                Awesome Card
              </div>
              <a className="block mt-1 text-base leading-tight font-medium text-black hover:underline" href="https://www.google.com">
                TailWind CSS is Amazing
              </a>
              <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </>
    );
  }