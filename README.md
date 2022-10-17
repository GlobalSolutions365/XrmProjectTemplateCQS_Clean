# Configuration steps

Steps:

1. git clone https://github.com/GlobalSolutions365/XrmProjectTemplateCQS_Clean
1. rename folder
1. delete .git
1. delete README.md
1. inside web resources "npm install"
1. rename sln
1. open in vs \ rebuild
1. configure  daxif_app_config.json

# Connection configuration

The CRM configuration can be configured in two ways
1. Directly by providing a standard CRM connection string (preferably the Client Secret version).
1. Indirectly through a connection string stored in Azure Key Vault.

For Azure Key Vault the connection string syntax is ```VaultUrl=https://my_vault.vault.azure.net/; Key=MyConnectionStringSecret```

This should correlate to a secret named ```MyConnectionStringSecret``` being created in a keyvault under the address ```https://my_vault.vault.azure.net/```.
