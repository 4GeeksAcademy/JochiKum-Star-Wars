const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
			host: 'https://playground.4geeks.com/contact',
			user: 'JochiKum',
			currentContact: {},
			characters: [],
			currentCharacter: {},
			favorites:[{name: 'tierra', type: 'planet'}, {name: 'Luke', type: 'characters'}]

		},
		actions: {
			// Use getActions to call a function within a fuction
			setCurrentContact: (contact) => { setStore({ currentContact: contact }) },
			setCurrentCharacter: (value) => { setStore({ currentCharacter: value }) },
			addFavorites: (newFavorite) => {
				// Verificar que no se agregue de nuevo el character //
				setStore({ favorites: [...getStore().favorites, newFavorite]} )
			},
			removeFavorites: (noFavorite) => {
				const resultado = getStore().favorites.filter((item) => item.name !== noFavorite);
				setStore({ favorites: resultado})
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getContact: async () => {
				const uri = `${getStore().host}/agendas/${getStore().user}/contacts`
				const options = {
					method: 'GET'
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log(`Error:`, response.status, response.statusText);
					return
				}
				const data = await response.json()
				console.log(data.contacts);
				//setcontacts(data.contacts);
				setStore({ contacts: data.contacts });
			},
			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			addContact: async (newContact) => {
				const uri = `${getStore().host}/agendas/` + getStore().user + '/contacts';
				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newContact)
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					// Tratar el error
					return;
				}
				// const data = await response.json()
				getActions().getContact()
			},
			editContact: async (id, contact) => {
				const uri = `${getStore().host}/agendas/${getStore().user}/contacts/${id}`;
				const options = {
					method: 'PUT',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contact)
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					// Tratar el error
					return;
				}
				// const data = await response.json()
				getActions().getContact()
			},
			deleteContact: async (id) => {
				const uri = `${getStore().host}/agendas/${getStore().user}/contacts/${id}`;
				const options = {
					method: 'DELETE'
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					// Tratar el error
					return;
				}
				// const data = await response.json()
				getActions().getContact()
			},
			getCharacters: async () => {
				if (localStorage.getItem('characters')) {
					setStore({characters: JSON.parse(localStorage.getItem('characters'))});
					console.log('characters estaba en el local storage')
					return
				}
				const response = await fetch('https://www.swapi.tech/api/people')
				if (!response.ok) {
					return
				}
				const data = await response.json();
				setStore({ characters: data.results });
				localStorage.setItem('characters', JSON.stringify (data.results))
			},
			getCharacterDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
				if (!response.ok) { return };
				const data = await response.json();
				setStore({ currentCharacter: data.result.properties })
			},
			getPlanets: async () => {
				const uri = `${getStore().hostStar}/planets`
				const options = {
					method: 'GET',
				};
				const response = await fetch(uri, options);
				const data = await response.json();
				setStore({ planets: data.results });
				if (!response.ok) {
					return
				}
			},
			getPlanetsDetails: async (uid) => {
				const uri = `${getStore().hostStar}/planets/${uid}`
				setStore({ isLoading: true })
				const options = {
					method: 'GET',
				};
				const response = await fetch(uri, options);
				const data = await response.json();
				setStore({ planetsDetails: data.result });
				if (!response.ok) {
					return
				}
				setStore({ isLoading: false })
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
