

# accounts
GET /accounts
GET transactions/accounts
{ 
  'accounts': {
    "accountId1": {
      "checking": "string",
      "balance": "string",
    }
    "accountId2": {
      "checking": "string",
      "balance": "string",
    }
  }
}

# afficher les transactions
GET /accounts/{AccountId}/transactions
GET /account/{checking}
GET /transactions/{checking}
account:{
  "transaction1": {
    "id": "string",
    "date": "string",
    "description": "string",
    "amount": "string",
    "balance": "string",
    "type" : "string",
    "details": {
      "category": "string",
      "notes": "string"
    }
  }

  "transaction2": {
    "id": "string",
    "date": "string",
    "description": "string",
    "amount": "string",
    "balance": "string",
    "type" : "string",
    "details": {
      "category": "string",
      "notes": "string"
    }
  }    
}
# {
#   "year": {
#     "mounth": {
#       "day": {
#         "transaction1": {
#           "id": "string",
#           "date": "string",
#           "description": "string",
#           "amount": "string",
#           "balance": "string"
#         }
#         "transaction2": {
#           "id": "string",
#           "date": "string",
#           "description": "string",
#           "amount": "string",
#           "balance": "string"
#         }
#       }
#     }
#   }
# }

# ajouter / modifier ou supprimer (put null) le détail d'une transaction
#  /accounts/{AccountId}/transactions/{transactionId}
# /transactions/{transactionId}
GET /transactions/{checking}/{id} -> est-ce utile ?
PUT /transactions/{transactionId}
