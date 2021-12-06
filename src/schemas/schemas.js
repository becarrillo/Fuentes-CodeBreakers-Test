const { buildSchema } = require('graphql');
import { makeExecutableSchema } from 'graphql-tools';
import graphql from 'graphql';
import { resolvers } from '../resolvers/resolvers';

const dateValue = (value) => {
    if (value instanceof Date) {
        return +value;
    }
};
const DateType = new graphql.GraphQLScalarType({
    name: 'Date',
    serialize: dateValue,
    parseValue: dateValue,
    parseLiteral(ast) {
      return dateValue(ast.value);
    }
});

const typeDefinitions = buildSchema (`
    type Query {
        getAdvances: [Advance]
        getAdvance(description: String): Advance
        getAdvanceById(id: ID!): Advance
        getInscriptions: [Inscription]
        getInscriptionById(id: ID!): Inscription
    }

    type Mutation {
        updateAdvance(description: String!): Advance
        updateAdvanceById(id: ID!): Advance
        deleteAdvance(description: String!): Advance
        deleteAdvanceById(description: String!): Advance
        updateInscriptionById(id: ID!): Inscription
        deleteInscriptionById(id: ID!): Inscription
    }

    type Advance {
        advanceId: ID,
        projectId: ID,
        studentId: ID,
        advanceDate: DateValue,
        description: String,
        observation: String
    }

    type Inscription {
        InscriptionId: ID,
        studentId: ID,
        projectId: ID,
        state: String,
        inDate: DateValue,
        outDate: DateValue
    }

    type Projects {
        name: String,
        specific_objctve: String,
        general_objctve: String,
        estimate: Float,
        beginning: DateValue,
        finishing: DateValue,
        LeadDocumentID: String,
        name_lead: String, 
        projectstate: String,
        projectphase: String
    }

    type Users {
        email: String,
        documentID: String,
        fullname: String,
        password: String,
        role: String,
        state: String
    }

`);

export default makeExecutableSchema({
    typeDefs: typeDefinitions,
    resolvers: resolvers
});