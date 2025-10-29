# ALX Project 0x14 – MoviesDatabase API

## API Overview
The MoviesDatabase API provides access to a large collection of movie data, including details such as titles, genres, cast, release years, and images. It allows developers to search for movies, filter by criteria (e.g., year, genre), and retrieve detailed movie information for use in applications.

## API Version
**Version:** v1 (latest)

## Available Endpoints
| Endpoint | Description |
|-----------|--------------|
| `/titles` | Retrieves a paginated list of movies. Supports query parameters like `year`, `genre`, and `sort`. |
| `/titles/search/title` | Search for movies by title. |
| `/titles/{id}` | Get detailed info for a specific movie using its ID. |
| `/titles/utils/genres` | Get available genres list. |

## Request and Response Format
**Request Example:**
```bash
GET https://moviesdatabase.p.rapidapi.com/titles?year=2023&limit=10
Headers:
  x-rapidapi-host: moviesdatabase.p.rapidapi.com
  x-rapidapi-key: YOUR_API_KEY