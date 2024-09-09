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
		    currentContact: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			setCurrentContact: (contact) => { setStore({ currentContact: contact}) },
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
