
const GITHUB_TOKEN = ProcessingInstruction.env.GITHUB_TOKEN;
export const userInfo = async (username, callback) => {
  const url = `https://api.github.com/users/${encodeURIComponent(username)}`;

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'node.js',
        'Authorization' : `token ${ GITHUB_TOKEN}` 
      }
    });
    const body = await response.json();

    console.log(body.login, body.name, body.created_at);

    callback({
      login: body.login,
      followers: body.followers,
      avatar: body.avatar_url,
      following: body.following,
      repos: body.public_repos,
      name: body.name,
      bio: body.bio,
      joined: body.created_at,
      location: body.location,
      blog: body.blog,
      company: body.company,
      twitter: body.twitter_username
    });
  } catch (error) {
    console.error('GitHub API error:', error);
    callback({});
  }
};


