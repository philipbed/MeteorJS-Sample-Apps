/**
 * Created by Phil on 11/16/2016.
 */
import { Random } from 'meteor/random';
import { Tasks } from './tasks';

export const typeDefs = [`
type Email {
  address: String
  verified: Boolean
}



type User {
  emails: [Email]
  username: String
  randomString: String
  tasks: [Task]
  _id: String
}

type Task {
    text: String
    createdAt: String
    owner: String
    username: String
}
type Query {
  user(id: String!): User
}
schema {
  query: Query
}
`];

export const resolvers = {
    Query: {
        user(root, args, context) {
            // Only return the current user, for security
            if (context.userId === args.id) {
                return context.user;
            }
        },
    },
    User: {
        emails: ({emails}) => emails,
        randomString: () => Random.id(),
        tasks(user){
            return Tasks.find({owner:{$eq:user._id}}).fetch();
        }
    },

};
