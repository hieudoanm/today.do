import { RESTDataSource } from '@apollo/datasource-rest';
import { Country } from '../../generated/graphql';

export class CountriesDataSource extends RESTDataSource {
  override baseURL = 'https://restcountries.com/v3.1/';

  public async getCountries(): Promise<Country[]> {
    return this.get('all');
  }

  public async getCountry(cca3: string): Promise<Country | undefined> {
    const countries = await this.getCountries();
    return countries.find(({ cca3: cca3Country }) => cca3 === cca3Country);
  }
}
