// abstractService.js
class AbstractService {
  constructor(baseUrl = null) {
    if (this.constructor === AbstractService) {
      throw new Error("Cannot instantiate an abstract class.");
    }
    this.baseUrl = baseUrl ? baseUrl : '/api';
  }

  getAuthToken() {
    return localStorage.getItem('authToken');
  }

    getHeaders() {
        const token = this.getAuthToken();
        const headers = {
            'Content-Type': 'application/json',
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        return headers;
    }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: this.getHeaders(),
      });
      if (!response.ok) {
        throw new Error('Error en la respuesta GET');
      }
      return await response.json();
    } catch (error) {
      console.error('Error al realizar GET:', error);
      throw error;
    }
  }

  async post(endpoint, data) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Error en la respuesta POST');
      }
      return await response.json();
    } catch (error) {
      console.error('Error al realizar POST:', error);
      throw error;
    }
  }

  async put(endpoint, data) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Error en la respuesta PUT');
      }
      return await response.json();
    } catch (error) {
      console.error('Error al realizar PUT:', error);
      throw error;
    }
  }

  async delete(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });
      if (!response.ok) {
        throw new Error('Error en la respuesta DELETE');
      }
      return await response.json();
    } catch (error) {
      console.error('Error al realizar DELETE:', error);
      throw error;
    }
  }
}

export default AbstractService;
